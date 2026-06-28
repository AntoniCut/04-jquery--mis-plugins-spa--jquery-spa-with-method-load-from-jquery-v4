/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  /html-page.esm.js  --  /src/scripts/js/pages/html-page.esm.js  -----  *
    *  ----------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades HTML exportadas como módulo nativo.
    *  Usa import/export para organizar y reutilizar el código.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Lista de void elements en HTML5 */
export const VOID_TAGS = Object.freeze([
    'area', 'base', 'br', 'col', 'embed', 'hr',
    'img', 'input', 'link', 'meta', 'param',
    'source', 'track', 'wbr',
]);

/** Etiquetas semánticas de HTML5 */
export const SEMANTIC_TAGS = Object.freeze([
    'header', 'nav', 'main', 'section', 'article',
    'aside', 'footer', 'figure', 'figcaption', 'mark',
    'time', 'details', 'summary', 'dialog',
]);


//  -----  Funciones exportadas  -----

/**
 * Comprueba si una etiqueta es un void element (no necesita cierre).
 * @param {string} tag
 * @returns {boolean}
 */
export function isVoidElement(tag) {
    return VOID_TAGS.includes(tag.toLowerCase());
}


/**
 * Comprueba si una etiqueta es semántica de HTML5.
 * @param {string} tag
 * @returns {boolean}
 */
export function isSemanticTag(tag) {
    return SEMANTIC_TAGS.includes(tag.toLowerCase());
}


/**
 * Genera un string de apertura de etiqueta HTML con sus atributos.
 * @param {string} tag
 * @param {Record<string, string>} [attrs]
 * @returns {string}
 */
export function openTag(tag, attrs = {}) {
    const attrsStr = Object.entries(attrs)
        .map(([key, val]) => ` ${key}="${val}"`)
        .join('');

    return isVoidElement(tag)
        ? `<${tag}${attrsStr} />`
        : `<${tag}${attrsStr}>`;
}


/**
 * Genera el string de cierre de una etiqueta HTML (si no es void).
 * @param {string} tag
 * @returns {string}
 */
export function closeTag(tag) {
    return isVoidElement(tag) ? '' : `</${tag}>`;
}


/**
 * Envuelve contenido con una etiqueta HTML y sus atributos.
 * @param {string} tag
 * @param {string} content
 * @param {Record<string, string>} [attrs]
 * @returns {string}
 */
export function wrapTag(tag, content, attrs = {}) {
    return `${openTag(tag, attrs)}${content}${closeTag(tag)}`;
}


/**
 * Crea un elemento del DOM con atributos y texto opcionales.
 * @param {string} tag
 * @param {Record<string, string>} [attrs]
 * @param {string} [text]
 * @returns {HTMLElement}
 */
export function createElement(tag, attrs = {}, text = '') {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, val));
    if (text) el.textContent = text;
    return el;
}


//  -----  Export default  -----

export default {
    VERSION,
    VOID_TAGS,
    SEMANTIC_TAGS,
    isVoidElement,
    isSemanticTag,
    openTag,
    closeTag,
    wrapTag,
    createElement,
};
