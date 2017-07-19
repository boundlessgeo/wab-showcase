injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});


                    var textStyleCache_raleighdowntown={}
                    var clusterStyleCache_raleighdowntown={}
                    var style_raleighdowntown = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_raleighdowntown'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,192,1.0)", lineDash: null, width: pixelsFromMm(0.66)}),
                            fill: new ol.style.Fill({color: "rgba(198,198,198,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_raleighdowntown = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_raleighdowntown'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.66)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_buildings = function(){ return {"CANOPY": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(219,100,140,1.0)"}),
zIndex: 0
                            })
                            ],
"COMMERCIAL": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(30,239,169,1.0)"}),
zIndex: 0
                            })
                            ],
"MOBILE HOME": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(133,169,240,1.0)"}),
zIndex: 0
                            })
                            ],
"RESIDENTIAL": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(221,178,92,1.0)"}),
zIndex: 0
                            })
                            ],
"UNDER CONSTRUCTION": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(168,57,223,1.0)"}),
zIndex: 0
                            })
                            ],
"": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(97,235,27,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_buildings = {"CANOPY": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"COMMERCIAL": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"MOBILE HOME": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"RESIDENTIAL": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"UNDER CONSTRUCTION": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_buildings={}
                    var clusterStyleCache_buildings={}
                    var style_buildings = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_buildings'
        };
                        
                        var value = feature.get("DESCRIPTIO");
                        var style = categories_buildings()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_buildings = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_buildings'
        };
                        var value = feature.get("DESCRIPTIO");
                        var style = categoriesSelected_buildings[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'Stamen toner lite',
    source: new ol.source.Stamen({
        crossOrigin: 'anonymous',
        layer: 'toner-lite'}),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_raleighdowntown = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_raleighdowntown,
                    selectedStyle: selectionStyle_raleighdowntown,
                    title: null,
                    id: "raleigh_downtown20161228143332835",
                    filters: [],
                    timeInfo: null,
                    isSelectable: false,
                    popupInfo: "",
                    attributes: ["OBJECTID", "OVERLAY", "OLAY_DECOD", "ZONE_CASE", "ORDINANCE", "EFF_DATE", "OVERLAY_TY", "Shape_Leng", "Shape_Area"],
                    geometryType: "Polygon"
                });
raleighdowntown_geojson_callback = function(geojson) {
                              lyr_raleighdowntown.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              
                        };
var lyr_buildings = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_buildings,
                    selectedStyle: selectionStyle_buildings,
                    title: "Buildings",
                    id: "raleigh_downtown_buildings20170320122317569",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["FTR_CODE", "DESCRIPTIO", "SUBTYPE", "IMPERVIOUS", "UPDATE_DAT", "SHAPE_2_AR", "SHAPE_2_LE"],
                    geometryType: "Polygon"
                });
buildings_geojson_callback = function(geojson) {
                              lyr_buildings.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              
                        };

lyr_raleighdowntown.setVisible(true);
lyr_buildings.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_raleighdowntown,lyr_buildings];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_raleighdowntown':lyr_raleighdowntown,'lyr_buildings':lyr_buildings};
var charts = [{"categoryField": "DESCRIPTIO", "layer": "raleigh_downtown_buildings20170320122317569", "title": "building_category", "displayMode": 2, "valueFields": ["DESCRIPTIO"], "operation": 0}];
var legendData = {"raleigh_downtown_buildings20170320122317569": [{"href": "1_0.png", "title": "CANOPY"}, {"href": "1_1.png", "title": "COMMERCIAL"}, {"href": "1_2.png", "title": "MOBILE HOME"}, {"href": "1_3.png", "title": "RESIDENTIAL"}, {"href": "1_4.png", "title": "UNDER CONSTRUCTION"}, {"href": "1_5.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-8761101.508144, 4267405.777868, -8747813.658018, 4273498.146401];
var unitsConversion = 1;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.Attribution({collapsible: false}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});



var BasicApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  componentDidMount: function() {
    
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable: function() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery: function() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _hideAboutPanel: function(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  },
  _toggleChartPanel: function(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render: function() {
    var toolbarOptions = {title:"Raleigh Downtown Parks"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ,
React.createElement("div", {id:'geocoding'},
                                        React.createElement(Geocoding, {maxResults:5})),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-table', tooltip: 'Table', onTouchTap: this._toggleTable.bind(this)}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-bar-chart', tooltip: 'Charts', onTouchTap: this._toggleChartPanel.bind(this)}),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true})),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'about-panel', className:'about-panel'},
                                        React.createElement("a", {href:'#', id:'about-panel-closer',
                                            className:'about-panel-closer', onClick:this._hideAboutPanel.bind(this)},
                                              "X"
                                        ),
                                        React.createElement("div", {dangerouslySetInnerHTML:{__html: '<h1>Test instructions</h1><p>Open the Chart panel, clicking on the corresponding button. It will be empty. Activate the selection tool and select a few features in the map. Verify that a char is created and shown.</p>'}})
                                    ),
React.createElement("div", {id:'geocoding-results', className:'geocoding-results-panel'},
                                    React.createElement(GeocodingResults, {map:map, zoom:10})
                                  ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
      )
      ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {allowEdit:false, toggleGroup: 'navigation',
                                                              ref: 'table', pointZoom:16, map: map,
                                                              sortable:true, pageSize:20})
                                    ),
React.createElement("div", {id: 'chart-panel', className: 'chart-panel'},
                                       React.createElement(Chart, {charts: charts, onClose: this._toggleChartPanel.bind(this)})
                                        ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'home-button'},
                                    React.createElement(HomeButton, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
