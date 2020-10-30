document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // sqlite

    //Open Database Connection
    // var date = window.sqlitePlugin.openDatabase({ name: "date.db", location: 'default' });
    var date = (window.cordova.platformId === 'browser') ?
        window.openDatabase('date', '1.0', 'Data', 2 * 1024 * 1024) :
        window.sqlitePlugin.openDatabase({ name: 'date.db', location: 'default' });


    //Create new table
    function createTable() {
        date.transaction(function (transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, name text, x0 text, x1 text, x2 text, x3 text, x4 text, x5 text, x6 text, x7 text, x8 text, x9 text, x10 text, x11 text, x12 text)', [],
                function (tx, result) {
                    console.log("Table created successfully");
                },
                function (error) {
                    alert("Error occurred while creating the table.");
                });
        });
        date.transaction(function (transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS calc_data (id integer primary key, res14 real, res15 real, res16 real, res17 real, res18 real, res19 real, res20 real, res21 real, res22 real, res23 real, res24 real, res25 real, res26 real, res27 real, res28 real, res29 real, res30 real, res31 real, res32 real, res33 real, res34 real, res35 real, res36 real, res37 real, res38 real, res39 real, res40 real, res41 real, res42 real, res43 real, res44 real, res45 real, res46 real, res47 real, res48 real, res49 real, res50 real, res51 real, res52 real, res53 real, res54 real, res55 real, res56 real, res57 real, res58 real, res59 real, res60 real, res61 real, res62 real, res63 real, res64 real, res65 real, res66 real, res67 real, res68 real, res69 real, res70 real, res71 real, res72 real, res73 real, res74 real, res75 real, res76 real, res77 real, res78 real, res79 real, res80 real, res81 real, res82 real, res83 real, res84 real, res85 real, res86 real, res87 real, res88 real, res89 real, res90 real, res91 real, res92 real, res93 real, res94 real)', [],
                function (tx, result) {
                    console.log("Table created calc_data");
                },
                function (error) {
                    alert("Error occurred while creating the table.calc_data");
                });
        });
    };

    createTable();

    // insert calc_data

    var 
        x2 = document.querySelector('.res-x2'),
        x3 = document.querySelector('.res-x3'),
        x4 = document.querySelector('.res-x4'),
        x5 = document.querySelector('.res-x5'),
        x6 = document.querySelector('.res-x6'),
        x7 = document.querySelector('.res-x7'),
        x8 = document.querySelector('.res-x8'),
        x9 = document.querySelector('.res-x9'),
        x10 = document.querySelector('.res-x10'),
        x11 = document.querySelector('.res-x11'),
        x12 = document.querySelector('.res-x12'),
        x13 = document.querySelector('.res-x13');
 

    $("#calc").on("click", function () {
        
        
        //Х14 = Х4*Х8
        var res14 = x4.value * x8.value;
        // Х15 = Х14*Х2
        var res15 = res14 * x2.value;
        //Х16 = Х15*Х9/100
        var res16 = (res15 * x9.value) / 100;
        //Х17 = Х15*Х10/100
        var res17 = (res15 * x10.value) / 100;
        //Х18 = Х15*Х11/100
        var res18 = (res15 * x11.value) / 100;
        //Х19 = Х15*Х12/100
        var res19 = (res15 * x12.value) / 100;
        //Х20 = Х15*Х13/100
        var res20 = (res15 * x13.value) / 100;
        //X21 = X16/X14
        var res21 = res16 / res14;
        //X22 = X17/X14
        var res22 = res17 / res14;
        //X23 = X18/X14
        var res23 = res18 / res14;
        //X24 = X19/X14
        var res24 = res19 / res14;
        //X25 = X20/X14
        var res25 = res20 / res14;
        //Х26 = Х5* Х8*Х21
        var res26 = x5.value * x8.value * res21;
        //Х27 = Х5* Х8*Х22
        var res27 = x5.value * x8.value * res22;
        //Х28 = Х5* Х8*Х23
        var res28 = x5.value * x8.value * res23;
        //Х29 = Х5* Х8*Х24
        var res29 = x5.value * x8.value * res24;
        //Х30 = Х5* Х8*Х25
        var res30 = x5.value * x8.value * res25;
        //Х31 = Х6* Х8*Х21
        var res31 = x6.value * x8.value * res21;
        //Х32 = Х6* Х8*Х22
        var res32 = x6.value * x8.value * res22;
        //Х33 = Х6* Х8*Х23
        var res33 = x6.value * x8.value * res23;
        //Х34 = Х6* Х8*Х24
        var res34 = x6.value * x8.value * res24;
        //Х35 = Х6* Х8*Х25
        var res35 = x6.value * x8.value * res25;
        //Х36 = Х7* Х8*Х21
        var res36 = x7.value * x8.value * res21;
        //Х37 = Х7* Х8*Х22
        var res37 = x7.value * x8.value * res22;
        //Х38 = Х7* Х8*Х23
        var res38 = x7.value * x8.value * res23;
        //Х39 = Х7* Х8*Х24
        var res39 = x7.value * x8.value * res24;
        //Х40 = Х7* Х8*Х25
        var res40 = x7.value * x8.value * res25;
        //x41
        var res41 = 0;

        if (res27 < res32 && res27 < res37) {
            res41 = res27;
        }

        else if (res32 < res27 && res32 < res37) {
            res41 = res32;
        }

        else if (res37 < res32 && res37 < res27) {
            res41 = res37;
        }

        //Х42 = Х41*3
        var res42 = res41 * 3;
        //Х43 = Х42/10
        var res43 = res42 / 10;
        //Х44 = Х43*5
        var res44 = res43 * 5;
        //Х45 = Х43*3
        var res45 = res43 * 3;
        //Х46 = Х43*2
        var res46 = res43 * 2;
        //Х47 = Х27-Х41+Х44
        var res47 = res27 - res41 + res44;
        //Х48 = Х32-Х41+Х45
        var res48 = res32 - res41 + res45;
        //Х49 = Х37-Х41+Х46
        var res49 = res37 - res41 + res46;
        //Х50 = Х47/(Х5*Х8)
        var res50 = res47 / (x5.value * x8.value);
        //Х51 = Х48/(Х6*Х8)
        var res51 = res48 / (x6.value * x8.value);
        //Х52 = Х49/(Х7*Х8)
        var res52 = res49 / (x7.value * x8.value);

        //Х53 = (Х50+Х51+Х52)/10*5
        var res53 = (res50 + res51 + res52) / 10 * 5;
        //Х54 = (Х50+Х51+Х52)/10*3
        var res54 = (res50 + res51 + res52) / 10 * 3;
        //Х55 = (Х50+Х51+Х52)/10*2
        var res55 = (res50 + res51 + res52) / 10 * 2;
        //Х56 = Х53*Х5*Х8
        var res56 = res53 * x5.value * x8.value;
        //Х57 = Х54*Х6*Х8
        var res57 = res54 * x6.value * x8.value;
        //Х58 = Х55*Х7*Х8
        var res58 = res55 * x7.value * x8.value;

        var res59 = 0;
        //если Х28 < X33 и Х28 < Х38 то Х59 = Х28
        if (res28 < res33 && res28 < res38) {
            res59 = res28;
        }
        //если Х33 < X28 и Х33 < Х38 то Х59 = Х33
        else if (res33 < res28 && res33 < res38) {
            res59 = res33;
        }
        //если Х38 < X33 и Х38 < Х28 то Х59 = Х38
        else if (res38 < res33 && res38 < res28) {
            res59 = res38;
        }


        //X60 = X59*3
        var res60 = res59 * 3;
        //X61 = X60/10
        var res61 = res60 / 10;
        //X62 = X61*2
        var res62 = res61 * 2;
        //X63 = X61*3
        var res63 = res61 * 3;
        //X64 = X61*5
        var res64 = res61 * 5;
        //X65 = X28-X59+X62
        var res65 = res28 - res59 + res62;
        //X66 = X33-X59+X63
        var res66 = res33 - res59 + res63;
        //X67 = X38-X59+X64
        var res67 = res38 - res59 + res64;
        //X68 = X65/(X5*X8)
        var res68 = res65 / (x5.value * x8.value);
        //X69 = X66/(X6*X8)
        var res69 = res66 / (x6.value * x8.value);
        //X70 = X67/(X7*X8)
        var res70 = res67 / (x7.value * x8.value);
        //X71 = (X68+X69+X70)/10*2
        var res71 = (res68 + res69 + res70) / 10 * 2;
        //X72 = (X68+X69+X70)/10*3
        var res72 = (res68 + res69 + res70) / 10 * 3;
        //X73 = (X68+X69+X70)/10*5
        var res73 = (res68 + res69 + res70) / 10 * 5;
        //X74 = X71*X5*X8
        var res74 = res71 * x5.value * x8.value;
        //X75 = X72*X6*X8
        var res75 = res72 * x6.value * x8.value;
        //X76 = X73*X7*X8
        var res76 = res73 * x7.value * x8.value;

        //x77
        var res77 = 0;
        //если Х29 < X34 и Х29 < Х39 то Х77 = Х29
        if (res29 < res34 && res29 < res39) {
            res77 = res29;
        }
        //если Х34 < X29 и Х33 < Х39 то Х77 = Х34 Исправлено
        else if (res34 < res29 && res34 < res39) {
            res77 = res34;
        }
        //если Х39 < X34 и Х39 < Х29 то Х77 = Х39
        else if (res39 < res34 && res39 < res29) {
            res77 = res39;
        }


        //X78 = X77*3
        var res78 = res77 * 3;
        //X79 = X78/10
        var res79 = res78 / 10;
        //X80 = X79*5
        var res80 = res79 * 1;
        //X81 = X79*3
        var res81 = res79 * 3;
        //X82 = X79*2
        var res82 = res79 * 6;
        //X83 = X29-X77+X80
        var res83 = res29 - res77 + res80;
        //X84 = X34-X77+X81
        var res84 = res34 - res77 + res81;
        //X85 = X39-X77+X82
        var res85 = res39 - res77 + res82;
        //X86 = X83/(X5*X8)
        var res86 = res83 / (x5.value * x8.value);
        //X87 = X84/(X6*X8)
        var res87 = res84 / (x6.value * x8.value);
        //X88 = X85/(X7*X8)
        var res88 = res85 / (x7.value * x8.value);
        //X89 = (X86+X87+X88)/10*1
        var res89 = (res86 + res87 + res88) / 10 * 1;
        //X90 = (X86+X87+X88)/10*3
        var res90 = (res86 + res87 + res88) / 10 * 3;
        //X91 = (X86+X87+X88)/10*6
        var res91 = (res86 + res87 + res88) / 10 * 6;
        //X92 = X89*X5*X8
        var res92 = res89 * x5.value * x8.value;
        //X93 = X90*X6*X8
        var res93 = res90 * x6.value * x8.value;
        //X94 = X91*X7*X8
        var res94 = res91 * x7.value * x8.value;

        date.transaction(function (transaction) {
            var executeQuery = "INSERT INTO calc_data (res14, res15, res16, res17, res18, res19, res20, res21, res22, res23, res24, res25, res26, res27, res28, res29, res30, res31, res32, res33, res34, res35, res36, res37, res38, res39, res40, res41, res42, res43, res44, res45, res46, res47, res48, res49, res50, res51, res52, res53, res54, res55, res56, res57, res58, res59, res60, res61, res62, res63, res64, res65, res66, res67, res68, res69, res70, res71, res72, res73, res74, res75, res76, res77, res78, res79, res80, res81, res82, res83, res84, res85, res86, res87, res88, res89, res90, res91, res92, res93, res94) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            transaction.executeSql(executeQuery, [res14, res15, res16, res17, res18, res19, res20, res21, res22, res23, res24, res25, res26, res27, res28, res29, res30, res31, res32, res33, res34, res35, res36, res37, res38, res39, res40, res41, res42, res43, res44, res45, res46, res47, res48, res49, res50, res51, res52, res53, res54, res55, res56, res57, res58, res59, res60, res61, res62, res63, res64, res65, res66, res67, res68, res69, res70, res71, res72, res73, res74, res75, res76, res77, res78, res79, res80, res81, res82, res83, res84, res85, res86, res87, res88, res89, res90, res91, res92, res93, res94]
                , function (tx, result) {
                    alert('Успешно!');
                },
                function (error) {
                    alert('Ошибка!' + JSON.stringify(error));
                });
        });

    });

    //Insert New Data
    $("#insert").on("click", function () {
        var name = $("#name").val();
        var x0 = $("#x0").val();
        var x1 = $("#x1").val();
        var x2 = $("#x2").val();
        var x3 = $("#x3").val();
        var x4 = $("#x4").val();
        var x5 = $("#x5").val();
        var x6 = $("#x6").val();
        var x7 = $("#x7").val();
        var x8 = $("#x8").val();
        var x9 = $("#x9").val();
        var x10 = $("#x10").val();
        var x11 = $("#x11").val();
        var x12 = $("#x12").val();


        date.transaction(function (transaction) {
            var executeQuery = "INSERT INTO phonegap_pro (name, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            transaction.executeSql(executeQuery, [name, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12]
                , function (tx, result) {
                    alert('Успешно!');
                    //next-page
                    window.location.href = "data-list.html";
                },
                function (error) {
                    alert('Ошибка!' + JSON.stringify(error));
                });
        });

    });







    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
