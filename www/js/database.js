document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {



    var date = (window.cordova.platformId === 'browser') ?
        window.openDatabase('date', '1.0', 'Data', 2 * 1024 * 1024) :
        window.sqlitePlugin.openDatabase({ name: 'date.db', location: 'default' });

    date.transaction(function (transaction) {
        transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
            var len = results.rows.length,
            for (i = 0; i < len; i++) {
                $('.x0').html(results.rows.item(i).x0);
                $('.x1').html(results.rows.item(i).x1);
                $('.x2').html(results.rows.item(i).x2);
                $('.x3').html(results.rows.item(i).x3);
                $('.x4').html(results.rows.item(i).x4);
                $('.x5').html(results.rows.item(i).x5);
                $('.x6').html(results.rows.item(i).x6);
                $('.x7').html(results.rows.item(i).x7);
                $('.x8').html(results.rows.item(i).x8);
                $('.x9').html(results.rows.item(i).x9);
               $('.x10').html(results.rows.item(i).x10);
               $('.x11').html(results.rows.item(i).x11);
               $('.x12').html(results.rows.item(i).x12);
            }
            
        });

    });

}