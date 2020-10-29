document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
// sqlite

    //Open Database Connection
    var date = window.sqlitePlugin.openDatabase({ name: "date.db", location: 'default' });

    //Create new table
    function createTable(){
    date.transaction(function(transaction) {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, name text, x0 text, x1 text, x2 text, x3 text, x4 text, x5 text, x6 text, x7 text, x8 text, x9 text, x10 text, x11 text, x12 text)', [],
        function(tx, result) {
            console.log("Table created successfully");
        }, 
        function(error) {
              alert("Error occurred while creating the table.");
        });
    });
};

createTable();



//Insert New Data
$("#insert").click(function(){
    var name=$("#name").val();
    var x0=$("#x0").val();
    var x1=$("#x1").val();
    var x2=$("#x2").val();
    var x3=$("#x3").val();
    var x4=$("#x4").val();
    var x5=$("#x5").val();
    var x6=$("#x6").val();
    var x7=$("#x7").val();
    var x8=$("#x8").val();
    var x9=$("#x9").val();
   var x10=$("#x10").val();
   var x11=$("#x11").val();
   var x12=$("#x12").val();
    console.log(name);
    date.transaction(function(transaction) {
          var executeQuery = "INSERT INTO phonegap_pro (name, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";             
          transaction.executeSql(executeQuery, [name, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12]
              , function(tx, result) {
                   alert('Успешно!');
              },
              function(error){
                   alert('Error occurred'); 
              });
      });
    //next-page
   window.location.href = "data-list.html";
  });




  

    
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
