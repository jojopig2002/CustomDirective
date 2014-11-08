'use strict';
angular.module("myUtility", ['ngDreamFactory']).service("Utility", ["DreamFactory",
	function(DreamFactory) {
		return {
			resetSelectedItem: function(oListItems) {
				for (var i = 0; i <= oListItems.length - 1; i++) {
					if (oListItems[i].className === "list-group-item active") {
						oListItems[i].className = "list-group-item";
						i = oListItems.length;
					}
				};
			},
			updateItemNo: function(oCatList, oActiveCat, oItemlist) {
				oCatList.forEach(function(element, idx, array) {
					if (element.id.toString() === oActiveCat.text()) {
						element.outstanding_no = oItemlist.length;
						var request = {
							table_name: "category",
							body: {
								"record": [{
									"date_id": element.date_id,
									"id": element.id,
									"category_name": element.category_name,
									"outstanding_no": element.outstanding_no,
									"items_total": 0
								}]
							},
							filter: "id=" + "'" + oActiveCat.text() + "'"
						};
						DreamFactory.api.db.updateRecordsByFilter(request,
							//success
							function(data) {

							},
							//error
							function(error) {

							}
						);
						idx = oCatList.length;
					}
				});
			}
		};
	}
]);
/* Services */