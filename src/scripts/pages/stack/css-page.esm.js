/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /css-page.esm.js  --  /src/scripts/js/pages/css-page.esm.js  -----  *
    *  ---------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades CSS exportadas como módulo nativo.
    *  Organiza lógica de estilos en funciones reutilizables con import/export.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Unidades CSS válidas */
export const CSS_UNITS = Object.freeze([
    'px', 'rem', 'em', '%', 'vw', 'vh',
    'vmin', 'vmax', 'ch', 'fr', 'dvh', 'dvw',
]);

/** Propiedades CSS que aceptan transición */
export const ANIMATABLE_PROPERTIES = Object.freeze([
    'opacity', 'transform', 'color', 'background-color',
    'border-color', 'box-shadow', 'width', 'height',
    'margin', 'padding', 'font-size', 'letter-spacing',
]);


//  -----  Funciones exportadas  -----

/**
 * Calcula la especificidad de un selector CSS simple.
 * @param {string} selector
 * @returns {{ ids: number, classes: number, tags: number, toString(): string }}
 */
export function calcSpecificity(selector) {
    const ids     = (selector.match(/#[\w-]+/g) ?? []).length;
    const classes = (selector.match(/\.[\w-]+|\[[\w\s=~|^$*"'-]+\]|:[\w-]+(?!\()/g) ?? []).length;
    const tags    = (selector.match(/(?:^|[\s>+~])[\w-]+|:{2}[\w-]+/g) ?? []).length;

    return {
        ids,
        classes,
        tags,
        toString: () => `(${ids},${classes},${tags})`,
    };
}


/**
 * Convierte camelCase a kebab-case (propiedad CSS).
 * @param {string} str
 * @returns {string}
 */
export function toKebabCase(str) {
    return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
}


/**
 * Convierte un nombre de variable a CSS Custom Property.
 * @param {string} name  - Nombre en camelCase o kebab-case.
 * @param {string|number} value
 * @returns {string}
 */
export function toCSSCustomProperty(name, value) {
    const prop = '--' + toKebabCase(name).replace(/^-/, '');
    return `${prop}: ${value};`;
}


/**
 * Comprueba si una unidad CSS es válida.
 * @param {string} unit
 * @returns {boolean}
 */
export function isValidUnit(unit) {
    return CSS_UNITS.includes(unit);
}


/**
 * Convierte un objeto de estilos JS (camelCase) a string CSS inline.
 * @param {Record<string, string | number>} styles
 * @returns {string}
 */
export function stylesToString(styles) {
    return Object.entries(styles)
        .map(([prop, val]) => `${toKebabCase(prop)}: ${val}`)
        .join('; ') + ';';
}


/**
 * Lee el valor de una CSS Custom Property en un elemento.
 * @param {string} prop - Nombre incluyendo "--" o sin él.
 * @param {HTMLElement} [el]
 * @returns {string}
 */
export function getCSSVar(prop, el = document.documentElement) {
    const name = prop.startsWith('--') ? prop : `--${prop}`;
    return getComputedStyle(el).getPropertyValue(name).trim();
}


/**
 * Establece el valor de una CSS Custom Property en un elemento.
 * @param {string} prop
 * @param {string|number} value
 * @param {HTMLElement} [el]
 */
export function setCSSVar(prop, value, el = document.documentElement) {
    const name = prop.startsWith('--') ? prop : `--${prop}`;
    el.style.setProperty(name, String(value));
}


//  -----  Export default  -----

export default {
    VERSION,
    CSS_UNITS,
    ANIMATABLE_PROPERTIES,
    calcSpecificity,
    toKebabCase,
    toCSSCustomProperty,
    isValidUnit,
    stylesToString,
    getCSSVar,
    setCSSVar,
};
