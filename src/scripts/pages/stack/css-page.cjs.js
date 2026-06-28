// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /css-page.cjs.js  --  /src/scripts/js/pages/css-page.cjs.js  -----  *
    *  ---------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Manipulación de estilos CSS desde JavaScript.
    *  Demuestra cómo trabajar con clases, inline styles y CSS Custom Properties.
*/

(function () {

    console.log('\n');
    console.warn('-----  css-page.cjs.js  -----  CommonJS (IIFE)  -----');
    console.log('\n');


    /*
        --------------------------------------------------
        -----  Utilidades CSS con JavaScript clásico  -----
        --------------------------------------------------
    */

    /**
     * Calcula la especificidad de un selector CSS simple.
     * Devuelve un array [IDs, Clases/Atributos/Pseudoclases, Elementos/Pseudoelementos].
     * @param {string} selector
     * @returns {[number, number, number]}
     */
    function calcSpecificity(selector) {
        var ids     = (selector.match(/#[\w-]+/g) || []).length;
        var classes = (selector.match(/\.[\w-]+|\[[\w\s=~|^$*"'-]+\]|:[\w-]+(?!\()/g) || []).length;
        var tags    = (selector.match(/(?:^|[\s>+~])[\w-]+|:{2}[\w-]+/g) || []).length;
        return [ids, classes, tags];
    }


    /**
     * Formatea la especificidad como string legible "a,b,c".
     * @param {string} selector
     * @returns {string}
     */
    function specificityString(selector) {
        return calcSpecificity(selector).join(',');
    }


    /**
     * Convierte un nombre a formato CSS custom property.
     * @param {string} name
     * @param {string|number} value
     * @returns {string}
     */
    function toCSSCustomProperty(name, value) {
        var prop = '--' + name.replace(/([A-Z])/g, function (match) {
            return '-' + match.toLowerCase();
        }).replace(/^-/, '');
        return prop + ': ' + value + ';';
    }


    /**
     * Convierte un objeto de estilos a string CSS inline.
     * @param {Object} styles
     * @returns {string}
     */
    function stylesToString(styles) {
        return Object.keys(styles).map(function (prop) {
            var cssProp = prop.replace(/([A-Z])/g, function (m) { return '-' + m.toLowerCase(); });
            return cssProp + ': ' + styles[prop];
        }).join('; ') + ';';
    }


    //  -----  Demostración de especificidad  -----

    var selectores = [
        'div',
        '.card',
        '#hero',
        'div.card',
        '#nav .menu li a',
        '.header__title--main',
        'input[type="text"]',
        'a:hover',
        'p::first-line',
    ];

    console.log('-----  Especificidad de selectores CSS  -----');
    selectores.forEach(function (sel) {
        console.log(
            sel.padEnd(30),
            '→  especificidad: (' + specificityString(sel) + ')'
        );
    });


    //  -----  Demostración de CSS Custom Properties  -----

    console.log('\n-----  CSS Custom Properties  -----');
    console.log(toCSSCustomProperty('primaryColor', '#264de4'));
    console.log(toCSSCustomProperty('fontSizeLg', '2.4rem'));
    console.log(toCSSCustomProperty('borderRadius', '0.8rem'));
    console.log(toCSSCustomProperty('bgGradientHeader', 'linear-gradient(to right, #264de4, #2965f1)'));


    //  -----  Demostración de stylesToString  -----

    console.log('\n-----  Inline styles  -----');
    var cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '2.5rem',
        boxShadow: '0 4px 16px rgba(38,77,228,0.1)',
    };

    console.log('style="' + stylesToString(cardStyles) + '"');


    /*
        --------------------------------------------------
        -----  Patrón Module — CSSUtils  -----
        --------------------------------------------------
    */

    var CSSUtils = (function () {

        var _version = '1.0.0';

        var _units = ['px', 'rem', 'em', '%', 'vw', 'vh', 'vmin', 'vmax', 'ch', 'fr'];

        /**
         * Comprueba si una unidad CSS es válida.
         * @param {string} unit
         * @returns {boolean}
         */
        function isValidUnit(unit) {
            return _units.indexOf(unit) !== -1;
        }

        return {
            version: _version,
            units: _units,
            isValidUnit: isValidUnit,
            calcSpecificity: calcSpecificity,
            specificityString: specificityString,
            toCSSCustomProperty: toCSSCustomProperty,
            stylesToString: stylesToString,
        };

    })();

    console.log('\n-----  CSSUtils module  -----');
    console.log('Versión:', CSSUtils.version);
    console.log('Unidades disponibles:', CSSUtils.units.join(', '));
    console.log('¿"rem" es válida?  →', CSSUtils.isValidUnit('rem'));
    console.log('¿"pts" es válida?  →', CSSUtils.isValidUnit('pts'));

    console.log('\n');

})();
