// @ts-nocheck
"use strict";
/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  /html-page.cjs.js  --  /src/scripts/js/pages/html-page.cjs.js  -----  *
    *  ----------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Manipulación del DOM para la página HTML.
    *  Demuestra cómo crear y modificar elementos HTML de forma programática.
*/

(function () {

    console.log('\n');
    console.warn('-----  html-page.cjs.js  -----  CommonJS (IIFE)  -----');
    console.log('\n');


    /*
        -------------------------------------------------------
        -----  Utilidades para crear elementos HTML en JS  -----
        -------------------------------------------------------
    */

    /**
     * Crea un elemento HTML con atributos y contenido de texto.
     * @param {string} tag - Nombre de la etiqueta.
     * @param {Object} attrs - Atributos del elemento.
     * @param {string} [text] - Contenido de texto.
     * @returns {HTMLElement}
     */
    function createElement(tag, attrs, text) {
        var el = document.createElement(tag);
        Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
        });
        if (text) {
            el.textContent = text;
        }
        return el;
    }


    /**
     * Etiquetas HTML void (sin cierre).
     * @type {string[]}
     */
    var VOID_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];


    /**
     * Comprueba si una etiqueta es void element.
     * @param {string} tag
     * @returns {boolean}
     */
    function isVoidElement(tag) {
        return VOID_TAGS.indexOf(tag.toLowerCase()) !== -1;
    }


    /**
     * Genera la representación string de una etiqueta HTML de apertura.
     * @param {string} tag
     * @param {Object} [attrs]
     * @returns {string}
     */
    function openTag(tag, attrs) {
        var attrsStr = '';
        if (attrs) {
            attrsStr = Object.keys(attrs).map(function (key) {
                return ' ' + key + '="' + attrs[key] + '"';
            }).join('');
        }
        return '<' + tag + attrsStr + (isVoidElement(tag) ? ' /' : '') + '>';
    }


    //  -----  Demostración  -----

    console.log('-----  Void elements  -----');
    console.log('¿Es <br> un void element?   →', isVoidElement('br'));
    console.log('¿Es <div> un void element?  →', isVoidElement('div'));
    console.log('¿Es <img> un void element?  →', isVoidElement('img'));

    console.log('\n-----  openTag()  -----');
    console.log(openTag('a', { href: 'https://developer.mozilla.org', target: '_blank' }));
    console.log(openTag('img', { src: 'logo.png', alt: 'Logo', width: '100' }));
    console.log(openTag('div', { class: 'container', id: 'main' }));

    console.log('\n-----  createElement()  -----');
    var heading = createElement('h1', { class: 'title', id: 'hero-title' }, 'HTML5 — HyperText Markup Language');
    console.log('Tag creado:', heading.tagName);
    console.log('Class:', heading.getAttribute('class'));
    console.log('TextContent:', heading.textContent);


    /*
        --------------------------------------------------
        -----  Patrón Module (closure para encapsular)  -----
        --------------------------------------------------
    */

    var HtmlUtils = (function () {

        var _version = '1.0.0';

        /**
         * Serializa un objeto de atributos a string.
         * @param {Object} attrs
         * @returns {string}
         */
        function serializeAttrs(attrs) {
            if (!attrs) return '';
            return Object.keys(attrs).reduce(function (acc, key) {
                return acc + ' ' + key + '="' + attrs[key] + '"';
            }, '');
        }

        return {
            version: _version,
            voidTags: VOID_TAGS,
            isVoidElement: isVoidElement,
            openTag: openTag,
            serializeAttrs: serializeAttrs
        };

    })();

    console.log('\n-----  HtmlUtils module  -----');
    console.log('Versión:', HtmlUtils.version);
    console.log('serializeAttrs():', HtmlUtils.serializeAttrs({ class: 'card', 'data-id': '42' }));
    console.log('Void tags disponibles:', HtmlUtils.voidTags.join(', '));

    console.log('\n');

})();
