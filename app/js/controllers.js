'use strict';
var todo = angular.module('todo', ['ngDreamFactory', 'ui.bootstrap', 'myPanel'])
	.constant('DSP_URL', 'http://localhost/dream')
	.constant('DSP_API_KEY', 'test');
todo.controller('TodoCtrl', ["$scope", "$http", "$interval", "DreamFactory",
	function($scope, $http, $interval, DreamFactory) {
		$scope.myData = [{
			Name: "Panel1Preset1",
			A: "Panel1Value1",
			B: "Panel1Value2"
		}, {
			Name: "Panel1Preset2",
			A: "Panel1Value3",
			B: "Panel1Value4"
		}, {
			Name: "Panel1Preset3",
			A: "Panel1Value5",
			B: "Panel1Value6"
		}, {
			Name: "Panel1Preset4",
			A: "Panel1Value7",
			B: "Panel1Value8"
		}];
		// panel1
		$scope.onAdd = function(evt) {
			var oData = {
				Name: $scope.modelPreset,
				A: $scope.modelField1,
				B: $scope.modelField2
			};
			$scope.panelOptions.addData(oData);
			$scope.modelPreset = '';
			$scope.modelField1 = '';
			$scope.modelField2 = '';
		};
		$scope.onRemove = function(evt) {
			$scope.panelOptions.removeData();
			$scope.modelPreset = '';
			$scope.modelField1 = '';
			$scope.modelField2 = '';
		};
		$scope.onSave = function(evt) {

		};
		$scope.onLoad = function(oRowData) {
				$scope.modelPreset = oRowData.Name;
				$scope.modelField1 = oRowData.A;
				$scope.modelField2 = oRowData.B;
		};
		$scope.panelOptions = {
			id: '1',
			data: $scope.myData,
			restful: null,
			onLoadData: $scope.onLoad,
			onRemoveData: $scope.onRemove,
			onAddData: $scope.onAdd,
			onSaveData: $scope.onSave
		};
		// panel2
		$scope.myData1 = [{
			Name: "Panel2Preset1",
			A: "Panel2Value1",
			B: "Panel2Value2"
		}, {
			Name: "Panel2Preset2",
			A: "Panel2Value3",
			B: "Panel2Value4"
		}];
		$scope.onAdd1 = function(evt) {
			var oData = {
				Name: $scope.modelPreset1,
				A: $scope.modelField3,
				B: $scope.modelField4
			};
			$scope.panelOptions1.addData(oData);
			$scope.modelPreset1 = '';
			$scope.modelField3 = '';
			$scope.modelField4 = '';
		};
		$scope.onRemove1 = function(evt) {
			$scope.panelOptions1.removeData();
			$scope.modelPreset1 = '';
			$scope.modelField3 = '';
			$scope.modelField4 = '';
		};
		$scope.onSave1 = function(evt) {

		};
		$scope.onLoad1 = function(oRowData) {
				$scope.modelPreset1 = oRowData.Name;
				$scope.modelField3 = oRowData.A;
				$scope.modelField4 = oRowData.B;
		};
		$scope.panelOptions1 = {
			id: '2',
			data: $scope.myData1,
			restful: null,
			onLoadData: $scope.onLoad1,
			onRemoveData: $scope.onRemove1,
			onAddData: $scope.onAdd1,
			onSaveData: $scope.onSave1
		};
	}
]);
/* Controllers */