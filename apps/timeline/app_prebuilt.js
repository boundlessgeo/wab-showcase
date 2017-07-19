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

var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB light',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        })]
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_nexradbasereflect = new ol.layer.Tile({
                        opacity: 1.0,
                        timeInfo: null,
                         
                        source: new ol.source.TileWMS(({
                          crossOrigin: 'anonymous',
                          url: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi",
                          params: {"LAYERS": "nexrad-n0r-wmst" , "TILED": "true", "STYLES": ""},
                        })),
                        title: "NEXRAD BASE REFLECT",
                        id: "NEXRAD_BASE_REFLECT20160915152252019",
                        popupInfo: "",
                        projection: "EPSG:4326"
                      });

lyr_nexradbasereflect.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_nexradbasereflect];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_nexradbasereflect':lyr_nexradbasereflect};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-14193235.076142, 2596192.003123, -7180107.156166, 6673923.158904];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: []
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
    var toolbarOptions = {title:"Spatio-temporal WMS"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'timeline'},
                                    React.createElement(Playback, {map: map, minDate:0, maxDate:1,
                                    interval:500, numIntervals:100, autoPlay:false})
                                  ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
      )
      
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
