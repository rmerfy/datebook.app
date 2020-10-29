// calc

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function(){
    var id = decodeURI(parseInt(getUrlVars()["id"])),
        name = decodeURI(getUrlVars()["name"]),
        x1 = decodeURI(parseInt(getUrlVars()["x0"])),
        x2 = decodeURI(parseInt(getUrlVars()["x1"])),
        x3 = decodeURI(parseInt(getUrlVars()["x2"])),
        x4 = decodeURI(parseInt(getUrlVars()["x3"])),
        x5 = decodeURI(parseInt(getUrlVars()["x4"])),
        x6 = decodeURI(parseInt(getUrlVars()["x5"])),
        x7 = decodeURI(parseInt(getUrlVars()["x6"])),
        x8 = decodeURI(parseInt(getUrlVars()["x7"])),
        x9 = decodeURI(parseInt(getUrlVars()["x8"])),
        x10 = decodeURI(parseInt(getUrlVars()["x9"])),
        x11 = decodeURI(parseInt(getUrlVars()["x10"])),
        x12 = decodeURI(parseInt(getUrlVars()["x11"])),
        x13 = decodeURI(parseInt(getUrlVars()["x12"])),
        x14 = document.querySelector('.res-x14'),
        x15 = document.querySelector('.res-x15'),
        x16 = document.querySelector('.res-x16'),
        x17 = document.querySelector('.res-x17'),
        x18 = document.querySelector('.res-x18'),
        x19 = document.querySelector('.res-x19'),
        x20 = document.querySelector('.res-x20'),
        x21 = document.querySelector('.res-x21'),
        x22 = document.querySelector('.res-x22'),
        x23 = document.querySelector('.res-x23'),
        x24 = document.querySelector('.res-x24'),
        x25 = document.querySelector('.res-x25'),
        x26 = document.querySelector('.res-x26'),
        x27 = document.querySelector('.res-x27'),
        x28 = document.querySelector('.res-x28'),
        x29 = document.querySelector('.res-x29'),
        x30 = document.querySelector('.res-x30'),
        x31 = document.querySelector('.res-x31'),
        x32 = document.querySelector('.res-x32'),
        x33 = document.querySelector('.res-x33'),
        x34 = document.querySelector('.res-x34'),
        x35 = document.querySelector('.res-x35'),
        x36 = document.querySelector('.res-x36'),
        x37 = document.querySelector('.res-x37'),
        x38 = document.querySelector('.res-x38'),
        x39 = document.querySelector('.res-x39'),
        x40 = document.querySelector('.res-x40'),
        x42 = document.querySelector('.res-x42'),
        x43 = document.querySelector('.res-x43'),
        x44 = document.querySelector('.res-x44'),
        x45 = document.querySelector('.res-x45'),
        x46 = document.querySelector('.res-x46'),
        x47 = document.querySelector('.res-x47'),
        x48 = document.querySelector('.res-x48'),
        x49 = document.querySelector('.res-x49'),
        x50 = document.querySelector('.res-x50'),
        x51 = document.querySelector('.res-x51'),
        x52 = document.querySelector('.res-x52'),
        x53 = document.querySelector('.res-x53'),
        x54 = document.querySelector('.res-x54'),
        x55 = document.querySelector('.res-x55'),
        x56 = document.querySelector('.res-x56'),
        x57 = document.querySelector('.res-x57'),
        x58 = document.querySelector('.res-x58'),
        x60 = document.querySelector('.res-x60'),
        x61 = document.querySelector('.res-x61'),
        x62 = document.querySelector('.res-x62'),
        x63 = document.querySelector('.res-x63'),
        x64 = document.querySelector('.res-x64'),
        x65 = document.querySelector('.res-x65'),
        x66 = document.querySelector('.res-x66'),
        x67 = document.querySelector('.res-x67'),
        x68 = document.querySelector('.res-x68'),
        x69 = document.querySelector('.res-x69'),
        x70 = document.querySelector('.res-x70'),
        x71 = document.querySelector('.res-x71'),
        x72 = document.querySelector('.res-x72'),
        x73 = document.querySelector('.res-x73'),
        x74 = document.querySelector('.res-x74'),
        x75 = document.querySelector('.res-x75'),
        x76 = document.querySelector('.res-x76'),
        x78 = document.querySelector('.res-x78'),
        x79 = document.querySelector('.res-x79'),
        x80 = document.querySelector('.res-x80'),
        x81 = document.querySelector('.res-x81'),
        x82 = document.querySelector('.res-x82'),
        x83 = document.querySelector('.res-x83'),
        x84 = document.querySelector('.res-x84'),
        x85 = document.querySelector('.res-x85'),
        x86 = document.querySelector('.res-x86'),
        x87 = document.querySelector('.res-x87'),
        x88 = document.querySelector('.res-x88'),
        x89 = document.querySelector('.res-x89'),
        x90 = document.querySelector('.res-x90'),
        x91 = document.querySelector('.res-x91'),
        x92 = document.querySelector('.res-x92'),
        x93 = document.querySelector('.res-x93'),
        x94 = document.querySelector('.res-x94');

        //Х14 = Х4*Х8
        let res14 = x4 * x8;
        x14.textContent = res14;
        // Х15 = Х14*Х2
        let res15 = res14 * x2;
        x15.textContent = res15;
        //Х16 = Х15*Х9/100
        let res16 = (res15 * x9) / 100;
        x16.textContent = res16;
        //Х17 = Х15*Х10/100
        let res17 = (res15 * x10) / 100;
        x17.textContent = res17;
        //Х18 = Х15*Х11/100
        let res18 = (res15 * x11) / 100;
        x18.textContent = res18;
        //Х19 = Х15*Х12/100
        let res19 = (res15 * x12) / 100;
        x19.textContent = res19;
        //Х20 = Х15*Х13/100
        let res20 = (res15 * x13) / 100;
        x20.textContent = res20;
        //X21 = X16/X14
        let res21 = res16 / res14;
        x21.textContent = res21;
        //X22 = X17/X14
        let res22 = res17 / res14;
        x22.textContent = res22;
        //X23 = X18/X14
        let res23 = res18 / res14;
        x23.textContent = res23;
        //X24 = X19/X14
        let res24 = res19 / res14;
        x24.textContent = res24;
        //X25 = X20/X14
        let res25 = res20 / res14;
        x25.textContent = res25;
        //Х26 = Х5* Х8*Х21
        let res26 = x5 * x8 * res21;
        x26.textContent = res26;
        //Х27 = Х5* Х8*Х22
        let res27 = x5 * x8 * res22;
        x27.textContent = res27;
        //Х28 = Х5* Х8*Х23
        let res28 = x5 * x8 * res23;
        x28.textContent = res28;
        //Х29 = Х5* Х8*Х24
        let res29 = x5 * x8 * res24;
        x29.textContent = res29;
        //Х30 = Х5* Х8*Х25
        let res30 = x5 * x8 * res25;
        x30.textContent = res30;
        //Х31 = Х6* Х8*Х21
        let res31 = x6 * x8 * res21;
        x31.textContent = res31;
        //Х32 = Х6* Х8*Х22
        let res32 = x6 * x8 * res22;
        x32.textContent = res32;
        //Х33 = Х6* Х8*Х23
        let res33 = x6 * x8 * res23;
        x33.textContent = res33;
        //Х34 = Х6* Х8*Х24
        let res34 = x6 * x8 * res24;
        x34.textContent = res34;
        //Х35 = Х6* Х8*Х25
        let res35 = x6 * x8 * res25;
        x35.textContent = res35;
        //Х36 = Х7* Х8*Х21
        let res36 = x7 * x8 * res21;
        x36.textContent = res36;
        //Х37 = Х7* Х8*Х22
        let res37 = x7 * x8 * res22;
        x37.textContent = res37;
        //Х38 = Х7* Х8*Х23
        let res38 = x7 * x8 * res23;
        x38.textContent = res38;
        //Х39 = Х7* Х8*Х24
        let res39 = x7 * x8 * res24;
        x39.textContent = res39;
        //Х40 = Х7* Х8*Х25
        let res40 = x7 * x8 * res25;
        x40.textContent = res40;
        //x41
        let res41 = 0;

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
        let res42 = res41 * 3;
        x42.textContent = res42;
        //Х43 = Х42/10
        let res43 = res42 / 10;
        x43.textContent = res43;
        //Х44 = Х43*5
        let res44 = res43 * 5;
        x44.textContent = res44;
        //Х45 = Х43*3
        let res45 = res43 * 3;
        x45.textContent = res45;
        //Х46 = Х43*2
        let res46 = res43 * 2;
        x46.textContent = res46;
        //Х47 = Х27-Х41+Х44
        let res47 = res27 - res41 + res44;
        x47.textContent = res47;
        //Х48 = Х32-Х41+Х45
        let res48 = res32 - res41 + res45;
        x48.textContent = res48;
        //Х49 = Х37-Х41+Х46
        let res49 = res37 - res41 + res46;
        x49.textContent = res49;
        //Х50 = Х47/(Х5*Х8)
        let res50 = res47 / (x5 * x8);
        x50.textContent = res50;
        //Х51 = Х48/(Х6*Х8)
        let res51 = res48 / (x6 * x8);
        x51.textContent = res51;
        //Х52 = Х49/(Х7*Х8)
        let res52 = res49 / (x7 * x8);
        x52.textContent = res52;

        //Х53 = (Х50+Х51+Х52)/10*5
        let res53 = (res50 + res51 + res52) / 10 * 5;
        x53.textContent = res53;
        //Х54 = (Х50+Х51+Х52)/10*3
        let res54 = (res50 + res51 + res52) / 10 * 3;
        x54.textContent = res54;
        //Х55 = (Х50+Х51+Х52)/10*2
        let res55 = (res50 + res51 + res52) / 10 * 2;
        x55.textContent = res55;
        //Х56 = Х53*Х5*Х8
        let res56 = res53 * x5 * x8;
        x56.textContent = res56;
        //Х57 = Х54*Х6*Х8
        let res57 = res54 * x6 * x8;
        x57.textContent = res57;
        //Х58 = Х55*Х7*Х8
        let res58 = res55 * x7 * x8;
        x58.textContent = res58;

        let res59 = 0;
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
        let res60 = res59 * 3;
        x60.textContent = res60;
        //X61 = X60/10
        let res61 = res60 / 10;
        x61.textContent = res61;
        //X62 = X61*2
        let res62 = res61 * 2;
        x62.textContent = res62;
        //X63 = X61*3
        let res63 = res61 * 3;
        x63.textContent = res63;
        //X64 = X61*5
        let res64 = res61 * 5;
        x64.textContent = res64;
        //X65 = X28-X59+X62
        let res65 = res28 - res59 + res62;
        x65.textContent = res65;
        //X66 = X33-X59+X63
        let res66 = res33 - res59 + res63;
        x66.textContent = res66;
        //X67 = X38-X59+X64
        let res67 = res38 - res59 + res64;
        x67.textContent = res67;
        //X68 = X65/(X5*X8)
        let res68 = res65 / (x5 * x8);
        x68.textContent = res68;
        //X69 = X66/(X6*X8)
        let res69 = res66 / (x6 * x8);
        x69.textContent = res69;
        //X70 = X67/(X7*X8)
        let res70 = res67 / (x7 * x8);
        x70.textContent = res70;
        //X71 = (X68+X69+X70)/10*2
        let res71 = (res68 + res69 + res70) / 10 * 2;
        x71.textContent = res71;
        //X72 = (X68+X69+X70)/10*3
        let res72 = (res68 + res69 + res70) / 10 * 3;
        x72.textContent = res72;
        //X73 = (X68+X69+X70)/10*5
        let res73 = (res68 + res69 + res70) / 10 * 5;
        x73.textContent = res73;
        //X74 = X71*X5*X8
        let res74 = res71 * x5 * x8;
        x74.textContent = res74;
        //X75 = X72*X6*X8
        let res75 = res72 * x6 * x8;
        x75.textContent = res75;
        //X76 = X73*X7*X8
        let res76 = res73 * x7 * x8;
        x76.textContent = res76;

        //x77
        let res77 = 0;
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
        let res78 = res77 * 3;
        x78.textContent = res78;
        //X79 = X78/10
        let res79 = res78 / 10;
        x79.textContent = res79;
        //X80 = X79*5
        let res80 = res79 * 1;
        x80.textContent = res80;
        //X81 = X79*3
        let res81 = res79 * 3;
        x81.textContent = res81;
        //X82 = X79*2
        let res82 = res79 * 6;
        x82.textContent = res82;
        //X83 = X29-X77+X80
        let res83 = res29 - res77 + res80;
        x83.textContent = res83;
        //X84 = X34-X77+X81
        let res84 = res34 - res77 + res81;
        x84.textContent = res84;
        //X85 = X39-X77+X82
        let res85 = res39 - res77 + res82;
        x85.textContent = res85;
        //X86 = X83/(X5*X8)
        let res86 = res83 / (x5 * x8);
        x86.textContent = res86;
        //X87 = X84/(X6*X8)
        let res87 = res84 / (x6 * x8);
        x87.textContent = res87;
        //X88 = X85/(X7*X8)
        let res88 = res85 / (x7 * x8);
        x88.textContent = res88;
        //X89 = (X86+X87+X88)/10*1
        let res89 = (res86 + res87 + res88) / 10 * 1;
        x89.textContent = res89;
        //X90 = (X86+X87+X88)/10*3
        let res90 = (res86 + res87 + res88) / 10 * 3;
        x90.textContent = res90;
        //X91 = (X86+X87+X88)/10*6
        let res91 = (res86 + res87 + res88) / 10 * 6;
        x91.textContent = res91;
        //X92 = X89*X5*X8
        let res92 = res89 * x5 * x8;
        x92.textContent = res92;
        //X93 = X90*X6*X8
        let res93 = res90 * x6 * x8;
        x93.textContent = res93;
        //X94 = X91*X7*X8
        let res94 = res91 * x7 * x8;
        x94.textContent = res94;


        // name 

        $("name-data").html(name);
    
});
