/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /react-page.esm.js  --  /src/scripts/js/pages/react-page.esm.js  -----  *
    *  -------------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades React exportadas como módulo nativo.
    *  Usa import/export para organizar y reutilizar el código.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Conceptos básicos de React */
export const REACT_CONCEPTS = Object.freeze([
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
export const REACT_HOOKS = Object.freeze([
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


//  -----  Funciones exportadas  -----

/**
 * Comprueba si un string es un nombre de hook válido.
 * @param {string} name
 * @returns {boolean}
 */
export function isValidHook(name) {
    return REACT_HOOKS.some(hook => hook.toLowerCase() === name.toLowerCase());
}


/**
 * Formatea un concepto de React para display.
 * @param {string} concept
 * @returns {string}
 */
export function formatConcept(concept) {
    return concept.charAt(0).toUpperCase() + concept.slice(1);
}


/**
 * Genera una lista de JSX básico.
 * @param {string[]} concepts
 * @returns {string}
 */
export function generateConceptList(concepts = []) {
    return concepts.map(c => `  - ${formatConcept(c)}`).join('\n');
}


//  -----  Export default  -----

export default {
    VERSION,
    REACT_CONCEPTS,
    REACT_HOOKS,
    isValidHook,
    formatConcept,
    generateConceptList,
};