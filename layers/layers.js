var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasDukuhBanjarharjo_1 = new ol.format.GeoJSON();
var features_BatasDukuhBanjarharjo_1 = format_BatasDukuhBanjarharjo_1.readFeatures(json_BatasDukuhBanjarharjo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDukuhBanjarharjo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDukuhBanjarharjo_1.addFeatures(features_BatasDukuhBanjarharjo_1);
var lyr_BatasDukuhBanjarharjo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDukuhBanjarharjo_1, 
                style: style_BatasDukuhBanjarharjo_1,
                popuplayertitle: 'Batas Dukuh Banjarharjo ',
                interactive: false,
                title: '<img src="styles/legend/BatasDukuhBanjarharjo_1.png" /> Batas Dukuh Banjarharjo '
            });
var format_DukuhPadaanNgasem_2 = new ol.format.GeoJSON();
var features_DukuhPadaanNgasem_2 = format_DukuhPadaanNgasem_2.readFeatures(json_DukuhPadaanNgasem_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DukuhPadaanNgasem_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DukuhPadaanNgasem_2.addFeatures(features_DukuhPadaanNgasem_2);
var lyr_DukuhPadaanNgasem_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DukuhPadaanNgasem_2, 
                style: style_DukuhPadaanNgasem_2,
                popuplayertitle: 'Dukuh Padaan Ngasem',
                interactive: true,
    title: 'Dukuh Padaan Ngasem<br />\
    <img src="styles/legend/DukuhPadaanNgasem_2_0.png" /> 183.572 - 365.143 Rp/m² (Rendah)<br />\
    <img src="styles/legend/DukuhPadaanNgasem_2_1.png" /> 365.143 - 480.286 Rp/m² (Sedang)<br />\
    <img src="styles/legend/DukuhPadaanNgasem_2_2.png" /> 480.286 - 74.1571 Rp/m² (Tinggi)<br />' });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_BatasDukuhBanjarharjo_1.setVisible(true);lyr_DukuhPadaanNgasem_2.setVisible(true);lyr_Jalan_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_BatasDukuhBanjarharjo_1,lyr_DukuhPadaanNgasem_2,lyr_Jalan_3];
lyr_BatasDukuhBanjarharjo_1.set('fieldAliases', {'Dusun_1': 'Dusun_1', 'DESA': 'DESA', });
lyr_DukuhPadaanNgasem_2.set('fieldAliases', {'NUB': 'NUB ', 'x': 'x', 'y': 'y', 'NUB_1': 'NUB_1', 'X_1': 'X_1', 'Y_1': 'Y_1', 'Kelompok': 'Kelompok', 'Dusun': 'Nama Dukuh', 'Nama_Pemil': 'Nama Pemilik ', 'ZNT': 'Nilai Zona Nilai Tanah (Rp/m2)', 'luas': 'Luas Bidang (ha)', });
lyr_Jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasDukuhBanjarharjo_1.set('fieldImages', {'Dusun_1': 'TextEdit', 'DESA': 'TextEdit', });
lyr_DukuhPadaanNgasem_2.set('fieldImages', {'NUB': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'NUB_1': 'Hidden', 'X_1': 'Hidden', 'Y_1': 'Hidden', 'Kelompok': 'Hidden', 'Dusun': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'ZNT': 'TextEdit', 'luas': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasDukuhBanjarharjo_1.set('fieldLabels', {'Dusun_1': 'no label', 'DESA': 'no label', });
lyr_DukuhPadaanNgasem_2.set('fieldLabels', {'NUB': 'inline label - always visible', 'Dusun': 'inline label - always visible', 'Nama_Pemil': 'inline label - always visible', 'ZNT': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_Jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});