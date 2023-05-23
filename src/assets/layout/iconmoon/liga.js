/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'dollar': '&#xe93c;',
            'twists': '&#xe93d;',
            'angles-down': '&#xe93b;',
            'angles-up': '&#xe93a;',
            'angles-right': '&#xe939;',
            'angles-left': '&#xe938;',
            'circle-exclamation': '&#xe937;',
            'xmark': '&#xe936;',
            'soat': '&#xe919;',
            'phone': '&#xe91a;',
            'virtual-lottery': '&#xe91b;',
            'movements': '&#xe91c;',
            'eye-slash': '&#xe91d;',
            'packet': '&#xe91e;',
            'triangle-exclamation': '&#xe91f;',
            'user': '&#xe920;',
            'plus': '&#xe921;',
            'search-plus': '&#xe922;',
            'search': '&#xe923;',
            'left-arrow-long': '&#xe924;',
            'circle-info': '&#xe925;',
            'document': '&#xe926;',
            'clipboard-list': '&#xe927;',
            'pencil': '&#xe928;',
            'circle-xmark-solid': '&#xe929;',
            'circle-check-solid': '&#xe92a;',
            'circle-check': '&#xe92b;',
            'check': '&#xe92c;',
            'one-calendar': '&#xe92d;',
            'check-active': '&#xe92e;',
            'reload': '&#xe92f;',
            'copy': '&#xe930;',
            'automatic': '&#xe931;',
            'random': '&#xe932;',
            'bets': '&#xe933;',
            'tombola': '&#xe934;',
            'ticket-bar': '&#xe935;',
            'bars': '&#xe918;',
            '4c': '&#xe917;',
            'cart-solid': '&#xe914;',
            'home-solid': '&#xe915;',
            'bar-chart': '&#xe916;',
            '3c': '&#xe900;',
            '5n': '&#xe901;',
            'calendar': '&#xe902;',
            'cart': '&#xe903;',
            'clean': '&#xe904;',
            'currency': '&#xe905;',
            'down-arrow': '&#xe906;',
            'group-list': '&#xe907;',
            'help': '&#xe908;',
            'home': '&#xe909;',
            'left-arrow': '&#xe90a;',
            'remove': '&#xe90b;',
            'results': '&#xe90c;',
            'right-arrow': '&#xe90d;',
            'set': '&#xe90e;',
            'shopping-cart': '&#xe90f;',
            'sing-off': '&#xe910;',
            'ticket': '&#xe911;',
            'trade': '&#xe912;',
            'up-arrow': '&#xe913;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
