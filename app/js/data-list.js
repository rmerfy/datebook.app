document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
  //Display Table Data

  // var date = window.sqlitePlugin.openDatabase({ name: "date.db", location: 'default' });
  var date = (window.cordova.platformId === 'browser') ?
    window.openDatabase('date', '1.0', 'Data', 2 * 1024 * 1024) :
    window.sqlitePlugin.openDatabase({ name: 'date.db', location: 'default' });

  $("#showData").click(function () {
    showData();
  });

  showData();

  function showData() {
    $("#dataInfo").html("");
    date.transaction(function (transaction) {
      transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
        var len = results.rows.length, i;
        $("#rowCount").html(len);
        for (i = 0; i < len; i++) {
          $("#dataInfo").append("<ul><li>Имя: "
            + results.rows.item(i).name + "</li><li>Дата начало тренировок: "
            + results.rows.item(i).x0 + "</li><li>Объём в метрах за тренировку: "
            + results.rows.item(i).x1 + "</li><li>Количество лет спортсмену: "
            + results.rows.item(i).x2 + "</li><li>Количество недель до старта: "
            + results.rows.item(i).x3 + "</li><li>Количество недель общего этапа: "
            + results.rows.item(i).x4 + "</li><li>Количество недель специального этапа: "
            + results.rows.item(i).x5 + "</li><li>Количество недель соревновательного этапа: "
            + results.rows.item(i).x6 + "</li><li>Количество тренировок в неделю: "
            + results.rows.item(i).x7 + "</li><li>Объем в 1-ой зоне: "
            + results.rows.item(i).x8 + "</li><li>Объем в 2-ой зоне: "
            + results.rows.item(i).x9 + "</li><li>Объем в 3-ой зоне: "
            + results.rows.item(i).x10 + "</li><li>Объем в 4-ой зоне: "
            + results.rows.item(i).x11 + "</li><li>Объем в 5-ой зоне: "
            + results.rows.item(i).x12 + "</li><li> <a href='calc.html?id="
            + results.rows.item(i).id + "&name="
            + results.rows.item(i).name + "&x0="
            + results.rows.item(i).x0 + "&x1="
            + results.rows.item(i).x1 + "&x2="
            + results.rows.item(i).x2 + "&x3="
            + results.rows.item(i).x3 + "&x4="
            + results.rows.item(i).x4 + "&x5="
            + results.rows.item(i).x5 + "&x6="
            + results.rows.item(i).x6 + "&x7="
            + results.rows.item(i).x7 + "&x8="
            + results.rows.item(i).x8 + "&x9="
            + results.rows.item(i).x9 + "&x10="
            + results.rows.item(i).x10 + "&x11="
            + results.rows.item(i).x11 + "&x12="
            + results.rows.item(i).x12 + "'>Рассчет</a></li><li><a class='delete' href='#' id='"
            + results.rows.item(i).id + "'>Удалить</a></li><li>"
            + results.rows.item(i).x13 + "</li></ul>"
          );
        }

      }, null);
    });

    date.transaction(function (transaction) {
      transaction.executeSql('SELECT * FROM calc_data', [], function (tx, results) {
        var len = results.rows.length, i;
        $("#testCount").html(len);
        for (i = 0; i < len; i++) {
          $("#dataInfo").append(
                 "<div>" 
            + results.rows.item(i).res14 + "</div><div>"
            + results.rows.item(i).res15 + "</div><div>"
            + results.rows.item(i).res16 + "</div><div>"
            + results.rows.item(i).res17 + "</div><div>"
            + results.rows.item(i).res18 + "</div><div>"
            + results.rows.item(i).res19 + "</div><div>"
            + results.rows.item(i).res20 + "</div><div>"
            + results.rows.item(i).res21 + "</div><div>"
            + results.rows.item(i).res22 + "</div><div>"
            + results.rows.item(i).res23 + "</div><div>"
            + results.rows.item(i).res24 + "</div><div>"
            + results.rows.item(i).res25 + "</div><div>"
            + results.rows.item(i).res26 + "</div><div>"
            + results.rows.item(i).res27 + "</div><div>"
            + results.rows.item(i).res28 + "</div><div>"
            + results.rows.item(i).res29 + "</div><div>"
            + results.rows.item(i).res30 + "</div><div>"
            + results.rows.item(i).res31 + "</div><div>"
            + results.rows.item(i).res32 + "</div><div>"
            + results.rows.item(i).res33 + "</div><div>"
            + results.rows.item(i).res34 + "</div><div>"
            + results.rows.item(i).res35 + "</div><div>"
            + results.rows.item(i).res36 + "</div><div>"
            + results.rows.item(i).res37 + "</div><div>"
            + results.rows.item(i).res38 + "</div><div>"
            + results.rows.item(i).res39 + "</div><div>"
            + results.rows.item(i).res40 + "</div><div>"
            + results.rows.item(i).res41 + "</div><div>"
            + results.rows.item(i).res42 + "</div><div>"
            + results.rows.item(i).res43 + "</div><div>"
            + results.rows.item(i).res44 + "</div><div>"
            + results.rows.item(i).res45 + "</div><div>"
            + results.rows.item(i).res46 + "</div><div>"
            + results.rows.item(i).res47 + "</div><div>"
            + results.rows.item(i).res48 + "</div><div>"
            + results.rows.item(i).res49 + "</div><div>"
            + results.rows.item(i).res50 + "</div><div>"
            + results.rows.item(i).res51 + "</div><div>"
            + results.rows.item(i).res52 + "</div><div>"
            + results.rows.item(i).res53 + "</div><div>"
            + results.rows.item(i).res54 + "</div><div>"
            + results.rows.item(i).res55 + "</div><div>"
            + results.rows.item(i).res56 + "</div><div>"
            + results.rows.item(i).res57 + "</div><div>"
            + results.rows.item(i).res58 + "</div><div>"
            + results.rows.item(i).res59 + "</div><div>"
            + results.rows.item(i).res60 + "</div><div>"
            + results.rows.item(i).res61 + "</div><div>"
            + results.rows.item(i).res62 + "</div><div>"
            + results.rows.item(i).res63 + "</div><div>"
            + results.rows.item(i).res64 + "</div><div>"
            + results.rows.item(i).res65 + "</div><div>"
            + results.rows.item(i).res66 + "</div><div>"
            + results.rows.item(i).res67 + "</div><div>"
            + results.rows.item(i).res68 + "</div><div>"
            + results.rows.item(i).res69 + "</div><div>"
            + results.rows.item(i).res70 + "</div><div>"
            + results.rows.item(i).res71 + "</div><div>"
            + results.rows.item(i).res72 + "</div><div>"
            + results.rows.item(i).res73 + "</div><div>"
            + results.rows.item(i).res74 + "</div><div>"
            + results.rows.item(i).res75 + "</div><div>"
            + results.rows.item(i).res76 + "</div><div>"
            + results.rows.item(i).res77 + "</div><div>"
            + results.rows.item(i).res78 + "</div><div>"
            + results.rows.item(i).res79 + "</div><div>"
            + results.rows.item(i).res80 + "</div><div>"
            + results.rows.item(i).res81 + "</div><div>"
            + results.rows.item(i).res82 + "</div><div>"
            + results.rows.item(i).res83 + "</div><div>"
            + results.rows.item(i).res84 + "</div><div>"
            + results.rows.item(i).res85 + "</div><div>"
            + results.rows.item(i).res86 + "</div><div>"
            + results.rows.item(i).res87 + "</div><div>"
            + results.rows.item(i).res88 + "</div><div>"
            + results.rows.item(i).res89 + "</div><div>"
            + results.rows.item(i).res90 + "</div><div>"
            + results.rows.item(i).res91 + "</div><div>"
            + results.rows.item(i).res92 + "</div><div>"
            + results.rows.item(i).res93 + "</div><div>"
            + results.rows.item(i).res94 + "</div>"
          );
        }

      }, null);
    });

  }

  //Delete Data from Database
  $(document.body).on('click', '.delete', function () {
    var id = this.id;
    date.transaction(function (transaction) {
      var executeQuery = "DELETE FROM phonegap_pro where id=?";
      transaction.executeSql(executeQuery, [id],
        //On Success
        function (tx, result) {
          alert('Удалено');
          showData();
        },
        //On Error
        function (error) { alert('Something went Wrong'); });
    });
  });



}