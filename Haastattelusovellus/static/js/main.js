        var ika;

        function alkuTilanne(){
            document.getElementById("alle29").style.display = "inline";
            document.getElementById("yli29").style.display = "inline";
            document.getElementById("takaisinNappula").style.display = "none";
            document.getElementById("koulutus").style.display = "none";
            document.getElementById("tyoharjoittelu").style.display = "none";
            document.getElementById("kysy").innerHTML = "Oletko?";
        }

            document.getElementById("alle29").addEventListener("click", function() {
                ika = "alle29";
            });

            document.getElementById("yli29").addEventListener("click", function() {
                ika = "yli29";
            });

        function allekaksysi(){
            document.getElementById("alle29").style.display = "none";
            document.getElementById("yli29").style.display = "none";
            document.getElementById("takaisinAlle29").style.display = "none";
            document.getElementById("koulutus").style.display = "inline";
            document.getElementById("tyoharjoittelu").style.display = "inline";
            document.getElementById("takaisinNappula").style.display = "inline";
            document.getElementById("ammattikoulu").style.display = "none";
            document.getElementById("lukio").style.display = "none";
            document.getElementById("molfi").style.display = "none";
            document.getElementById("kysy").innerHTML = "Palvelut alle 29-vuotiaille";
        }

        function ylikaksysi(){
            document.getElementById("alle29").style.display = "none";
            document.getElementById("yli29").style.display = "none";
            document.getElementById("takaisinYli29").style.display = "none";
            document.getElementById("koulutus").style.display = "inline";
            document.getElementById("tyoharjoittelu").style.display = "inline";
            document.getElementById("takaisinNappula").style.display = "inline";
            document.getElementById("ammattikoulu").style.display = "none";
            document.getElementById("lukio").style.display = "none";
            document.getElementById("molfi").style.display = "none";
            document.getElementById("kysy").innerHTML = "Palvelut yli 29-vuotiaille";
        }

        function koulutusTarjonta(){
            document.getElementById("koulutus").style.display = "none";
            document.getElementById("tyoharjoittelu").style.display = "none";
            document.getElementById("takaisinNappula").style.display = "none";
            document.getElementById("takaisinKoulutus").style.display = "none";
            document.getElementById("sipoonlukio").style.display = "none";
            document.getElementById("slsp").style.display = "none";
            document.getElementById("slph").style.display = "none";
            document.getElementById("keudasipoo").style.display = "none";
            document.getElementById("keudavastaava").style.display = "none";
            document.getElementById("kssp").style.display = "none";
            document.getElementById("ksph").style.display = "none";


            if(ika == "alle29"){
                document.getElementById("takaisinAlle29").style.display = "inline";
            } else if(ika == "yli29"){
                document.getElementById("takaisinYli29").style.display = "inline";
            }
            document.getElementById("ammattikoulu").style.display = "inline";
            document.getElementById("lukio").style.display = "inline";
            document.getElementById("kysy").innerHTML = "Koulutustarjonta";
        }

        function ammattiKouluTarjonta(){
            document.getElementById("takaisinKoulutus").style.display = "inline";
            document.getElementById("ammattikoulu").style.display = "none";
            document.getElementById("lukio").style.display = "none";
            document.getElementById("keudasipoo").style.display = "inline";
            document.getElementById("keudavastaava").style.display = "inline";
            document.getElementById("kssp").style.display = "inline";
            document.getElementById("ksph").style.display = "inline";
            document.getElementById("kysy").innerHTML = "Ammatillinen koulutustarjonta";

        }

        function lukioTarjonta(){
            document.getElementById("takaisinKoulutus").style.display = "inline";
            document.getElementById("sipoonlukio").style.display = "inline";
            document.getElementById("slsp").style.display = "inline";
            document.getElementById("slph").style.display = "inline";
            document.getElementById("ammattikoulu").style.display = "none";
            document.getElementById("lukio").style.display = "none";
            document.getElementById("kysy").innerHTML = "Ylioppilas koulutustarjonta";
        }

        function tyoharjoitteluTarjonta(){
            document.getElementById("ammattikoulu").style.display = "none";
            document.getElementById("lukio").style.display = "none";
            document.getElementById("koulutus").style.display = "none";
            document.getElementById("tyoharjoittelu").style.display = "none";
            document.getElementById("takaisinNappula").style.display = "none";
            document.getElementById("molfi").style.display = "inline";

            if(ika == "alle29"){
                document.getElementById("takaisinAlle29").style.display = "inline";
            } else if(ika == "yli29"){
                document.getElementById("takaisinYli29").style.display = "inline";
            }
            document.getElementById("kysy").innerHTML = "Työharjoittelu";
        }

        /*
        document.body.onload = function () {
            document.addEventListener("contextmenu", function (e) {
               e.preventDefault();
            }, false);
            document.addEventListener("keydown", function (e) {
               //document.onkeydown = function(e) {
               // "I" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                   disabledEvent(e);
               }
               // "J" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                   disabledEvent(e);
               }
               // "S" key + macOS
               if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                   disabledEvent(e);
               }
               // "U" key
               if (e.ctrlKey && e.keyCode == 85) {
                   disabledEvent(e);
               }
               // "F12" key
               if (event.keyCode == 123) {
                   disabledEvent(e);
               }
            }, false);
            function disabledEvent(e) {
               if (e.stopPropagation) {
                   e.stopPropagation();
               } else if (window.event) {
                   window.event.cancelBubble = true;
               }
               e.preventDefault();
               return false;
           }
            document.getElementById("kysymys1").style.display = "inline";
            document.getElementById("takaisinNappula").style.display = "none";
            document.getElementById("seuraavakysymys").style.display = "none";
            document.getElementById("seuraavakysymys2").style.display = "none";
            document.getElementById("kysy").innerHTML = "kysymys1";

       }
*/
