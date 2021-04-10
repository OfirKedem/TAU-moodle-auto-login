// ==UserScript==
// @name         TAU-Moodle auto sing in
// @name:he           כניסה אוטומטית למודל
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @description:he  מאפשר להכנס למודל של תל אביב מהר
// @author       Ofir Kedem
// @include      https://nidp.tau.ac.il/*
// @match        https://moodle.tau.ac.il/my/
// @match        https://moodle.tau.ac.il/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function myFunction(){
        document.forms[0].elements["Ecom_User_Pid"].value="YOUR_ID";
        document.querySelector("body > form > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input").click()

    }

    function redirectME() {
        var classt = document.getElementsByClassName('usertext');
        if (classt.length === 0) {
            window.location.href = 'https://moodle.tau.ac.il/login/index.php';
        }

    }
    function redirectME2() {
        if (document.referrer.includes('sason')) {
            window.location.href = 'https://moodle.tau.ac.il/my/';
        }

    }

    var tnai=window.location.host;
    if (tnai=="moodle.tau.ac.il") {
        // redirectME2();
        redirectME();
    } else if (tnai=="nidp.tau.ac.il") {
        setTimeout(myFunction, 2000);
    } else {
    }

})();
