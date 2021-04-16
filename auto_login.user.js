// ==UserScript==
// @name         TAU-Moodle auto login
// @name:he           כניסה אוטומטית למודל
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  An automatic login script for TAU moodle.
// @description:he  מאפשר להכנס למודל של תל אביב מהר
// @author       Ofir Kedem
// @include      https://nidp.tau.ac.il/*
// @match        https://moodle.tau.ac.il/my/
// @match        https://moodle.tau.ac.il/
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    function clickLogin(){
        document.querySelector("body > form > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input").click()
    }

    function myFunction(){
        var ID_NUMBER = "1234567"

        document.querySelector("body > form > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]").value=ID_NUMBER;
        setTimeout(clickLogin, 1000);
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
        setTimeout(myFunction, 1000);
    } else {
    }

})();
