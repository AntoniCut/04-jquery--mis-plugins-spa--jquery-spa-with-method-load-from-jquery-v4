/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /astro-page.esm.js  --  /src/scripts/js/pages/astro-page.esm.js  -----  *
    *  -------------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades Astro exportadas como módulo nativo.
    *  Usa import/export para organizar y reutilizar el código.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Conceptos básicos de Astro */
export const ASTRO_CONCEPTS = Object.freeze([
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
export const ASTRO_CLIENT_DIRECTIVES = Object.freeze([
    'client:load',
    'client:idle',
    'client:visible',
    'client:media',
    'client:only',
]);


//  -----  Funciones exportadas  -----

/**
 * Comprueba si una directiva client es válida.
 * @param {string} directive
 * @returns {boolean}
 */
export function isValidClientDirective(directive) {
    return ASTRO_CLIENT_DIRECTIVES.includes(directive);
}


/**
 * Formatea un concepto de Astro para display.
 * @param {string} concept
 * @returns {string}
 */
export function formatConcept(concept) {
    return concept.charAt(0).toUpperCase() + concept.slice(1);
}


/**
 * Genera una lista de directivas client.
 * @param {string[]} directives
 * @returns {string}
 */
export function generateDirectiveList(directives = []) {
    return directives.map(d => `  - ${d}`).join('\n');
}


//  -----  Export default  -----

export default {
    VERSION,
    ASTRO_CONCEPTS,
    ASTRO_CLIENT_DIRECTIVES,
    isValidClientDirective,
    formatConcept,
    generateDirectiveList,
};