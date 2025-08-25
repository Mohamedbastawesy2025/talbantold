var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_wasta12121_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'wasta12121<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/wasta12121_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3460269.442211, 3559922.638525, 3461670.728047, 3562593.126502]
        })
    });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_wasta12121_1.setVisible(true);lyr_roads_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_wasta12121_1,lyr_roads_2];
lyr_roads_2.set('fieldAliases', {'Id': 'Id', });
lyr_roads_2.set('fieldImages', {'Id': 'Range', });
lyr_roads_2.set('fieldLabels', {'Id': 'no label', });
lyr_roads_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});