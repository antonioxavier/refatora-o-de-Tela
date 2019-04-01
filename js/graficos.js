
		
			AmCharts.makeChart("graf1",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"colors": [
						"#FF0F00",
						"#009688",
						"#FF9E01",
						"#FCD202",
						"#F8FF01",
						"#B0DE09",
						"#04D215",
						"#0D8ECF",
						"#0D52D1",
						"#2A0CD0",
						"#8A0CCF",
						"#CD0D74",
						"#754DEB",
						"#DDDDDD",
						"#999999",
						"#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
					],
					"titleField": "category",
					"valueField": "column-1",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Atrasado",
							"column-1": 8
						},
						{
							"category": "Realizado",
							"column-1": 6
						},
						{
							"category": "Andamento",
							"column-1": 2
						}
					]
				}
			);
	

			AmCharts.makeChart("graf2",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"colors": [
						"#FF0F00",
						"#009688",
						"#FF9E01",
						"#FCD202",
						"#F8FF01",
						"#B0DE09",
						"#04D215",
						"#0D8ECF",
						"#0D52D1",
						"#2A0CD0",
						"#8A0CCF",
						"#CD0D74",
						"#754DEB",
						"#DDDDDD",
						"#999999",
						"#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
					],
					"titleField": "category",
					"valueField": "column-1",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Atrasado",
							"column-1": "0"
						},
						{
							"category": "Realizado",
							"column-1": 6
						},
						{
							"category": "Andamento",
							"column-1": 2
						}
					]
				}
				);


				AmCharts.makeChart("graf3",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"colors": [
						"#FF0F00",
						"#009688",
						"#FF9E01",
						"#FCD202",
						"#F8FF01",
						"#B0DE09",
						"#04D215",
						"#0D8ECF",
						"#0D52D1",
						"#2A0CD0",
						"#8A0CCF",
						"#CD0D74",
						"#754DEB",
						"#DDDDDD",
						"#999999",
						"#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
					],
					"titleField": "category",
					"valueField": "column-1",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Atrasado",
							"column-1": "1"
						},
						{
							"category": "Realizado",
							"column-1": "3"
						},
						{
							"category": "Andamento",
							"column-1": "6"
						}
					]
				}

				);



				AmCharts.makeChart("atvs",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"colors": [
						"#4caf50",
						"#f44336",
						"#ff9800",
						"#FCD202",
						"#F8FF01",
						"#B0DE09",
						"#04D215",
						"#0D8ECF",
						"#0D52D1",
						"#2A0CD0",
						"#8A0CCF",
						"#CD0D74",
						"#754DEB",
						"#DDDDDD",
						"#999999",
						"#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
					],
					"gradientRatio": [],
					"titleField": "category",
					"valueField": "column-1",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Concluidas",
							"column-1": "32"
						},
						{
							"category": "Atrasadas",
							"column-1": "12"
						},
						{
							"category": "Pendentes",
							"column-1": "20"
						}
					]
				}
			);



AmCharts.makeChart("map",{
					"type": "map",
					"pathToImages": "http://www.amcharts.com/lib/3/images/",
					"addClassNames": true,
					"fontSize": 15,
					"color": "#000000",
					"projection": "eckert3",
					"backgroundAlpha": 1,
					"backgroundColor": "rgba(255,255,255)",
					"dataProvider": {
						"map": "worldLow",
						"getAreasFromMap": true,
						"images": [
							{
								"top": 40,
								"left": 60,
								"width": 80,
								"height": 40,
								"pixelMapperLogo": true,
								"imageURL": "http://pixelmap.amcharts.com/static/img/logo-black.svg",
								"url": "http://www.amcharts.com"
							}
						]
					},
					"balloon": {
						"horizontalPadding": 15,
						"borderAlpha": 0,
						"borderThickness": 1,
						"verticalPadding": 15
					},
					"areasSettings": {
						"color": "rgba(80,101,182,1)",
						"outlineColor": "rgba(177,206,255,1)",
						"rollOverOutlineColor": "rgba(177,206,255,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
					},
					"imagesSettings": {
						"alpha": 1,
						"color": "rgba(80,101,182,1)",
						"outlineAlpha": 0,
						"rollOverOutlineAlpha": 0,
						"outlineColor": "rgba(177,206,255,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true
					},
					"linesSettings": {
						"color": "rgba(80,101,182,1)",
						"selectable": true,
						"rollOverBrightness": 20,
						"selectedBrightness": 20
					},
					"zoomControl": {
						"zoomControlEnabled": true,
						"homeButtonEnabled": false,
						"panControlEnabled": false,
						"right": 38,
						"bottom": 30,
						"minZoomLevel": 0.25,
						"gridHeight": 100,
						"gridAlpha": 0.1,
						"gridBackgroundAlpha": 0,
						"gridColor": "#FFFFFF",
						"draggerAlpha": 1,
						"buttonCornerRadius": 2
					}
				});				