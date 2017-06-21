// ==UserScript==
// @name        Bulldozer
// @namespace   https://github.com/tiagoad/Bulldozer
// @include     http://*.publico.pt/*
// @updateURL   https://github.com/tiagoad/Bulldozer/raw/master/bulldozer.user.js
// @downloadURL https://github.com/tiagoad/Bulldozer/raw/master/bulldozer.user.js
// ==/UserScript==

var FAR_AWAY = "Fri, 31 Dec 9999 23:59:59 GMT"

// Público
if (window.location.hostname.indexOf("publico.pt")) {
    if (document.cookie.indexOf("JORNAL_PUBLICO_ASSINANTE") === -1) {
        document.cookie = 'JORNAL_PUBLICO_ASSINANTE=1; expires=' + FAR_AWAY + '; path=/'
    }

    adBlockDetected = function() {};
}
