var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        })
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        map.createPane('pane_OSMStandard_0');
        map.getPane('pane_OSMStandard_0').style.zIndex = 400;
        var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OSMStandard_0',
            opacity: 1.0,
            attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_OSMStandard_0;
        map.addLayer(layer_OSMStandard_0);
        function pop_FiberCoFibreCo_1(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['timestamp'] !== null ? autolinker.link(feature.properties['timestamp'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['begin'] !== null ? autolinker.link(feature.properties['begin'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['end'] !== null ? autolinker.link(feature.properties['end'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['altitudeMode'] !== null ? autolinker.link(feature.properties['altitudeMode'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['tessellate'] !== null ? autolinker.link(feature.properties['tessellate'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['extrude'] !== null ? autolinker.link(feature.properties['extrude'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['visibility'] !== null ? autolinker.link(feature.properties['visibility'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['drawOrder'] !== null ? autolinker.link(feature.properties['drawOrder'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['icon'] !== null ? autolinker.link(feature.properties['icon'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_FiberCoFibreCo_1_0() {
            return {
                pane: 'pane_FiberCoFibreCo_1',
                opacity: 1,
                color: 'rgba(41,48,40,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_FiberCoFibreCo_1');
        map.getPane('pane_FiberCoFibreCo_1').style.zIndex = 401;
        map.getPane('pane_FiberCoFibreCo_1').style['mix-blend-mode'] = 'normal';
        var layer_FiberCoFibreCo_1 = new L.geoJson(json_FiberCoFibreCo_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_FiberCoFibreCo_1',
            layerName: 'layer_FiberCoFibreCo_1',
            pane: 'pane_FiberCoFibreCo_1',
            onEachFeature: pop_FiberCoFibreCo_1,
            style: style_FiberCoFibreCo_1_0,
        });
        bounds_group.addLayer(layer_FiberCoFibreCo_1);
        map.addLayer(layer_FiberCoFibreCo_1);
        function pop_DarkFiberAfricaDFALonghaul_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['timestamp'] !== null ? autolinker.link(feature.properties['timestamp'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['begin'] !== null ? autolinker.link(feature.properties['begin'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['end'] !== null ? autolinker.link(feature.properties['end'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['altitudeMode'] !== null ? autolinker.link(feature.properties['altitudeMode'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['tessellate'] !== null ? autolinker.link(feature.properties['tessellate'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['extrude'] !== null ? autolinker.link(feature.properties['extrude'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['visibility'] !== null ? autolinker.link(feature.properties['visibility'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['drawOrder'] !== null ? autolinker.link(feature.properties['drawOrder'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['icon'] !== null ? autolinker.link(feature.properties['icon'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_DarkFiberAfricaDFALonghaul_2_0() {
            return {
                pane: 'pane_DarkFiberAfricaDFALonghaul_2',
                opacity: 1,
                color: 'rgba(255,148,25,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_DarkFiberAfricaDFALonghaul_2');
        map.getPane('pane_DarkFiberAfricaDFALonghaul_2').style.zIndex = 402;
        map.getPane('pane_DarkFiberAfricaDFALonghaul_2').style['mix-blend-mode'] = 'normal';
        var layer_DarkFiberAfricaDFALonghaul_2 = new L.geoJson(json_DarkFiberAfricaDFALonghaul_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_DarkFiberAfricaDFALonghaul_2',
            layerName: 'layer_DarkFiberAfricaDFALonghaul_2',
            pane: 'pane_DarkFiberAfricaDFALonghaul_2',
            onEachFeature: pop_DarkFiberAfricaDFALonghaul_2,
            style: style_DarkFiberAfricaDFALonghaul_2_0,
        });
        bounds_group.addLayer(layer_DarkFiberAfricaDFALonghaul_2);
        map.addLayer(layer_DarkFiberAfricaDFALonghaul_2);
        function pop_Telkom_South_AfricaTelkomSouthAfrica_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['timestamp'] !== null ? autolinker.link(feature.properties['timestamp'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['begin'] !== null ? autolinker.link(feature.properties['begin'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['end'] !== null ? autolinker.link(feature.properties['end'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['altitudeMode'] !== null ? autolinker.link(feature.properties['altitudeMode'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['tessellate'] !== null ? autolinker.link(feature.properties['tessellate'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['extrude'] !== null ? autolinker.link(feature.properties['extrude'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['visibility'] !== null ? autolinker.link(feature.properties['visibility'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['drawOrder'] !== null ? autolinker.link(feature.properties['drawOrder'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['icon'] !== null ? autolinker.link(feature.properties['icon'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Telkom_South_AfricaTelkomSouthAfrica_3_0() {
            return {
                pane: 'pane_Telkom_South_AfricaTelkomSouthAfrica_3',
                opacity: 1,
                color: 'rgba(172,91,49,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Telkom_South_AfricaTelkomSouthAfrica_3');
        map.getPane('pane_Telkom_South_AfricaTelkomSouthAfrica_3').style.zIndex = 403;
        map.getPane('pane_Telkom_South_AfricaTelkomSouthAfrica_3').style['mix-blend-mode'] = 'normal';
        var layer_Telkom_South_AfricaTelkomSouthAfrica_3 = new L.geoJson(json_Telkom_South_AfricaTelkomSouthAfrica_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Telkom_South_AfricaTelkomSouthAfrica_3',
            layerName: 'layer_Telkom_South_AfricaTelkomSouthAfrica_3',
            pane: 'pane_Telkom_South_AfricaTelkomSouthAfrica_3',
            onEachFeature: pop_Telkom_South_AfricaTelkomSouthAfrica_3,
            style: style_Telkom_South_AfricaTelkomSouthAfrica_3_0,
        });
        bounds_group.addLayer(layer_Telkom_South_AfricaTelkomSouthAfrica_3);
        map.addLayer(layer_Telkom_South_AfricaTelkomSouthAfrica_3);
        function pop_TelecomTerminals_2018_4(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>city_id</strong><br />' + (feature.properties['city_id'] !== null ? autolinker.link(feature.properties['city_id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cable_id'] !== null ? autolinker.link(feature.properties['cable_id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_TelecomTerminals_2018_4_0() {
            return {
                pane: 'pane_TelecomTerminals_2018_4',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(128,17,25,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,30,42,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_TelecomTerminals_2018_4');
        map.getPane('pane_TelecomTerminals_2018_4').style.zIndex = 404;
        map.getPane('pane_TelecomTerminals_2018_4').style['mix-blend-mode'] = 'normal';
        var layer_TelecomTerminals_2018_4 = new L.geoJson(json_TelecomTerminals_2018_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_TelecomTerminals_2018_4',
            layerName: 'layer_TelecomTerminals_2018_4',
            pane: 'pane_TelecomTerminals_2018_4',
            onEachFeature: pop_TelecomTerminals_2018_4,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_TelecomTerminals_2018_4_0(feature));
            },
        });
        bounds_group.addLayer(layer_TelecomTerminals_2018_4);
        map.addLayer(layer_TelecomTerminals_2018_4);
        function pop_TelecomCables_2018copy_5(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Text_ID'] !== null ? autolinker.link(feature.properties['Text_ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cable_id'] !== null ? autolinker.link(feature.properties['cable_id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['length'] !== null ? autolinker.link(feature.properties['length'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ReadyForSe'] !== null ? autolinker.link(feature.properties['ReadyForSe'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['owners'] !== null ? autolinker.link(feature.properties['owners'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['url'] !== null ? autolinker.link(feature.properties['url'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Shape__Len'] !== null ? autolinker.link(feature.properties['Shape__Len'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_TelecomCables_2018copy_5_0() {
            return {
                pane: 'pane_TelecomCables_2018copy_5',
                opacity: 1,
                color: 'rgba(237,255,28,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_TelecomCables_2018copy_5');
        map.getPane('pane_TelecomCables_2018copy_5').style.zIndex = 405;
        map.getPane('pane_TelecomCables_2018copy_5').style['mix-blend-mode'] = 'normal';
        var layer_TelecomCables_2018copy_5 = new L.geoJson(json_TelecomCables_2018copy_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_TelecomCables_2018copy_5',
            layerName: 'layer_TelecomCables_2018copy_5',
            pane: 'pane_TelecomCables_2018copy_5',
            onEachFeature: pop_TelecomCables_2018copy_5,
            style: style_TelecomCables_2018copy_5_0,
        });
        bounds_group.addLayer(layer_TelecomCables_2018copy_5);
        map.addLayer(layer_TelecomCables_2018copy_5);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/TelecomCables_2018copy_5.png" /> South Africa Ocean Cables': layer_TelecomCables_2018copy_5,'<img src="legend/TelecomTerminals_2018_4.png" /> South Africa Data Centers': layer_TelecomTerminals_2018_4,'<img src="legend/Telkom_South_AfricaTelkomSouthAfrica_3.png" /> Telkom South Africa': layer_Telkom_South_AfricaTelkomSouthAfrica_3,'<img src="legend/DarkFiberAfricaDFALonghaul_2.png" /> DarkFiberAfrica DFA Longhaul': layer_DarkFiberAfricaDFALonghaul_2,'<img src="legend/FiberCoFibreCo_1.png" /> FiberCo': layer_FiberCoFibreCo_1,},{collapsed:false}).addTo(map);
        setBounds();
		map.setView([-30.559483,22.937506],5);