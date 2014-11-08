'use strict';
// var myPanelDirective = angular.module('myPanel.directive');
var myPanel = function($scope, options) {
	// $scope.items=options.data;
	this.options = options;
	this.scope = $scope;
};
myPanel.prototype.init = function() {
	this.scope.items = this.options.data;
	this.options['addData'] = this.addData.bind(this);
	this.options['saveData'] = this.saveData.bind(this);
	this.options['removeData'] = this.removeData.bind(this);
};
myPanel.prototype.getData = function() {
	var selectedItem = $('#dropDown-'+this.options.id).val(),
		oRowData = {
			Name: null,
			A: null,
			B: null
		};
	this.scope.items.forEach(function(element, idx, array) {
		if (element.Name == selectedItem) {
			oRowData.Name = element.Name;
			oRowData.A = element.A;
			oRowData.B = element.B;
			return;
		}
	});
	return oRowData;
};
myPanel.prototype.saveData = function(oData) {};
myPanel.prototype.addData = function(oData) {
	this.scope.items.push({
		Name: oData.Name,
		A: oData.A,
		B: oData.B
	});
};
myPanel.prototype.removeData = function() {
	var selectedItemIdx,
		selectedItem = $('#dropDown-'+this.options.id).val();
	this.scope.items.forEach(function(element, idx, array) {
		if (element.Name == selectedItem) {
			selectedItemIdx = idx;
			return;
		}
	});
	this.scope.items.splice(selectedItemIdx, 1);
};
angular.module('myPanel', [])
	.directive('myPanel', function() {
		return {
			scope: true,
			link: function($scope, iElement, iAttrs) {
				var options = $scope.$eval(iAttrs.myPanel);
				var oPanel = new myPanel($scope, options);
				oPanel.init();
				$scope.id=oPanel.options.id;
				$scope.onPanelLoad = function(evt) {
					var oRowData = oPanel.getData();
					oPanel.options.onLoadData(oRowData);
				};
				$scope.onPanelAdd = function(evt) {
					oPanel.options.onAddData(evt);
				};
				$scope.onPanelSave = function(evt) {
					oPanel.options.onSaveData(evt);
				};
				$scope.onPanelRemove = function(evt) {
					oPanel.options.onRemoveData(evt);
				};
			},
			template: '<div class="col-md-1"><select id="dropDown-{{id}}">'+
			'<option ng-repeat="item in items" value="{{item.Name}}">{{item.Name}}</option></select></div>' +
				'<div class="emptyBlock"></div>' +
				'<div class="emptyBlock"></div>' +
				'<div class="col-md-1"><button class="btn btn-default" ng-click="onPanelLoad($event)">load</button></div>'+
				'<div class="col-md-1"><button class="btn btn-success" ng-click="onPanelSave($event)">save</button></div>' +
				'<div class="col-md-1"><button class="btn btn-info" ng-click="onPanelAdd($event)">add</button></div>'+
				'<div class="col-md-1"><button class="btn btn-danger" ng-click="onPanelRemove($event)">remove</button></div>'
		};
	});
/* Directives */