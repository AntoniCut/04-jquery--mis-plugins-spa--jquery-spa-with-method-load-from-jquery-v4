// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /astro-page.cjs.js  --  /src/scripts/js/pages/astro-page.cjs.js  -----  *
    *  -------------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Utilidades Astro para la página.
*/

(function () {

    console.log('\n');
    console.warn('-----  astro-page.cjs.js  -----  CommonJS (IIFE)  -----');
    console.log('\n');


    //  -----  Constantes  -----

    /** Versión del módulo */
    var VERSION = '1.0.0';

    /** Conceptos básicos de Astro */
    var ASTRO_CONCEPTS = Object.freeze([
        'Islands',
        'Components',
        'Layouts',
        'Pages',
        'Content Collections',
        'MDX',
        'Build Output',
        'Integrations',
        'Astro.config',
        'client:* directives',
    ]);

    /** Directivas client-side de Astro */
    var ASTRO_CLIENT_DIRECTIVES = Object.freeze([
        'client:load',
        'client:idle',
        'client:visible',
        'client:media',
        'client:only',
    ]);


    //  -----  Funciones  -----

    /**
     * Comprueba si una directiva client es válida.
     * @param {string} directive
     * @returns {boolean}
     */
    function isValidClientDirective(directive) {
        return ASTRO_CLIENT_DIRECTIVES.indexOf(directive) !== -1;
    }


    /**
     * Formatea un concepto de Astro para display.
     * @param {string} concept
     * @returns {string}
     */
    function formatConcept(concept) {
        return concept.charAt(0).toUpperCase() + concept.slice(1);
    }


    /**
     * Genera una lista de directivas client.
     * @param {string[]} directives
     * @returns {string}
     */
    function generateDirectiveList(directives) {
        directives = directives || [];
        return directives.map(function (d) {
            return '  - ' + d;
        }).join('\n');
    }


    //  -----  Demostración  -----

    console.log('-----  ASTRO_CONCEPTS  -----');
    console.log(ASTRO_CONCEPTS.join(', '));

    console.log('\n-----  ASTRO_CLIENT_DIRECTIVES  -----');
    console.log(ASTRO_CLIENT_DIRECTIVES.join(', '));

    console.log('\n-----  isValidClientDirective()  -----');
    console.log('client:load es válida:', isValidClientDirective('client:load'));
    console.log('client:foo NO es válida:', isValidClientDirective('client:foo'));

    console.log('\n-----  formatConcept()  -----');
    console.log(formatConcept('islands'));
    console.log(formatConcept('content collections'));

    console.log('\n-----  generateDirectiveList()  -----');
    console.log(generateDirectiveList(['client:load', 'client:idle']));


    //  -----  Module Pattern (export via window)  -----

    window.AstroUtils = {
        VERSION: VERSION,
        ASTRO_CONCEPTS: ASTRO_CONCEPTS,
        ASTRO_CLIENT_DIRECTIVES: ASTRO_CLIENT_DIRECTIVES,
        isValidClientDirective: isValidClientDirective,
        formatConcept: formatConcept,
        generateDirectiveList: generateDirectiveList
    };

    console.log('\n');

})();