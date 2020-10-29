document.addEventListener('deviceready', onDeviceReady, false);
 
 
function onDeviceReady() {
 //Display Table Data

 var date = window.sqlitePlugin.openDatabase({ name: "date.db", location: 'default' });

  $("#showData").click(function(){
    showData();
  });

    showData();

function showData() {
    $("#dataInfo").html("");
    date.transaction(function(transaction) {
    transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
         var len = results.rows.length, i;
         $("#rowCount").html(len);
         for (i = 0; i < len; i++){
            $("#dataInfo").append("<ul><li>Имя: " 
            +results.rows.item(i).name + "</li><li>Дата начало тренировок: " 
            + results.rows.item(i).x0 + "</li><li>Объём в метрах за тренировку: " 
            + results.rows.item(i).x1 + "</li><li>Количество лет спортсмену: " 
            + results.rows.item(i).x2 + "</li><li>Количество недель до старта: " 
            + results.rows.item(i).x3 +"</li><li>Количество недель общего этапа: " 
            + results.rows.item(i).x4 + "</li><li>Количество недель специального этапа: " 
            + results.rows.item(i).x5 + "</li><li>Количество недель соревновательного этапа: " 
            + results.rows.item(i).x6 + "</li><li>Количество тренировок в неделю: " 
            + results.rows.item(i).x7 + "</li><li>Объем в 1-ой зоне: " 
            + results.rows.item(i).x8 + "</li><li>Объем в 2-ой зоне: " 
            + results.rows.item(i).x9 + "</li><li>Объем в 3-ой зоне: " 
            + results.rows.item(i).x10 + "</li><li>Объем в 4-ой зоне: " 
            + results.rows.item(i).x11 + "</li><li>Объем в 5-ой зоне: " 
            + results.rows.item(i).x12 + "</li><li> <a href='calc.html?id="
            +results.rows.item(i).id+ "&name="
            +results.rows.item(i).name + "&x0="
            +results.rows.item(i).x0 + "&x1="
            +results.rows.item(i).x1 + "&x2="
            +results.rows.item(i).x2 + "&x3="
            +results.rows.item(i).x3 + "&x4="
            +results.rows.item(i).x4 + "&x5="
            +results.rows.item(i).x5 + "&x6="
            +results.rows.item(i).x6 + "&x7="
            +results.rows.item(i).x7 + "&x8="
            +results.rows.item(i).x8 + "&x9="
            +results.rows.item(i).x9 + "&x10="
            +results.rows.item(i).x10 + "&x11="
            +results.rows.item(i).x11 + "&x12="
            +results.rows.item(i).x12 + "'>Рассчет</a></li><li><a class='delete' href='#' id='"
            +results.rows.item(i).id+"'>Удалить</a></li>"
            );
         }
      }, null);
    });
}

//Delete Data from Database
$(document.body).on('click', '.delete' ,function(){
    var id=this.id;
    date.transaction(function(transaction) {
      var executeQuery = "DELETE FROM phonegap_pro where id=?";
      transaction.executeSql(executeQuery, [id],
        //On Success
        function(tx, result) {
            alert('Удалено');
            showData();
        },
        //On Error
        function(error){alert('Something went Wrong');});
    });
  });



}