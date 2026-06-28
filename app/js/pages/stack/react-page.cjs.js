// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /react-page.cjs.js  --  /src/scripts/js/pages/react-page.cjs.js  -----  *
    *  -------------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Utilidades React para la página.
*/

(function () {

    console.log('\n');
    console.warn('-----  react-page.cjs.js  -----  CommonJS (IIFE)  -----');
    console.log('\n');


    //  -----  Constantes  -----

    /** Versión del módulo */
    var VERSION = '1.0.0';

    /** Conceptos básicos de React */
    var REACT_CONCEPTS = Object.freeze([
        'Components',
        'Props',
        'State',
        'Hooks',
        'JSX',
        'Virtual DOM',
        'useState',
        'useEffect',
        'useContext',
        'Custom Hooks',
    ]);

    /** Hooks principales de React */
    var REACT_HOOKS = Object.freeze([
        'useState',
        'useEffect',
        'useContext',
        'useReducer',
        'useCallback',
        'useMemo',
        'useRef',
        'useImperativeHandle',
        'useLayoutEffect',
        'useDebugValue',
    ]);


    //  -----  Funciones  -----

    /**
     * Comprueba si un string es un nombre de hook válido.
     * @param {string} name
     * @returns {boolean}
     */
    function isValidHook(name) {
        return REACT_HOOKS.some(function (hook) {
            return hook.toLowerCase() === name.toLowerCase();
        });
    }


    /**
     * Formatea un concepto de React para display.
     * @param {string} concept
     * @returns {string}
     */
    function formatConcept(concept) {
        return concept.charAt(0).toUpperCase() + concept.slice(1);
    }


    /**
     * Genera una lista de JSX básico.
     * @param {string[]} concepts
     * @returns {string}
     */
    function generateConceptList(concepts) {
        concepts = concepts || [];
        return concepts.map(function (c) {
            return '  - ' + formatConcept(c);
        }).join('\n');
    }


    //  -----  Demostración  -----

    console.log('-----  REACT_CONCEPTS  -----');
    console.log(REACT_CONCEPTS.join(', '));

    console.log('\n-----  REACT_HOOKS  -----');
    console.log(REACT_HOOKS.join(', '));

    console.log('\n-----  isValidHook()  -----');
    console.log('useState es hook válido:', isValidHook('useState'));
    console.log('foo bar NO es hook válido:', isValidHook('foo bar'));

    console.log('\n-----  formatConcept()  -----');
    console.log(formatConcept('useState'));
    console.log(formatConcept('virtual dom'));

    console.log('\n-----  generateConceptList()  -----');
    console.log(generateConceptList(['useState', 'useEffect']));


    //  -----  Module Pattern (export via window)  -----

    window.ReactUtils = {
        VERSION: VERSION,
        REACT_CONCEPTS: REACT_CONCEPTS,
        REACT_HOOKS: REACT_HOOKS,
        isValidHook: isValidHook,
        formatConcept: formatConcept,
        generateConceptList: generateConceptList
    };

    console.log('\n');

})();