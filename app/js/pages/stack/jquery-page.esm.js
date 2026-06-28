/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /jquery-page.esm.js  --  /src/scripts/js/pages/jquery-page.esm.js  -----  *
    *  ---------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades jQuery exportadas como módulo nativo.
    *  Equivalentes vanilla JS de los métodos más usados de jQuery.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Métodos jQuery más usados agrupados por categoría */
export const JQUERY_METHODS = Object.freeze({
    dom:       ['html', 'text', 'val', 'attr', 'prop', 'data', 'css', 'addClass', 'removeClass', 'toggleClass'],
    traversal: ['find', 'filter', 'children', 'parent', 'siblings', 'closest', 'each', 'eq', 'first', 'last'],
    events:    ['on', 'off', 'trigger', 'click', 'submit', 'change', 'keydown', 'focus', 'blur'],
    effects:   ['show', 'hide', 'toggle', 'fadeIn', 'fadeOut', 'fadeToggle', 'slideDown', 'slideUp', 'animate'],
    ajax:      ['ajax', 'get', 'post', 'getJSON', 'load'],
    dom_mod:   ['append', 'prepend', 'before', 'after', 'remove', 'empty', 'clone', 'wrap', 'unwrap'],
});


//  -----  Funciones exportadas  -----

/**
 * Equivalente vanilla JS de $(selector).
 * @param {string} selector
 * @param {Document|Element} [ctx=document]
 * @returns {Element[]}
 */
export function qsa(selector, ctx = document) {
    return Array.from(ctx.querySelectorAll(selector));
}


/**
 * Equivalente vanilla JS de $(selector) para un único elemento.
 * @param {string} selector
 * @param {Document|Element} [ctx=document]
 * @returns {Element|null}
 */
export function qs(selector, ctx = document) {
    return ctx.querySelector(selector);
}


/**
 * Equivalente vanilla JS de $.ready() / $(fn).
 * @param {() => void} fn
 */
export function ready(fn) {
    if (document.readyState !== 'loading')
        fn();
    else
        document.addEventListener('DOMContentLoaded', fn, { once: true });
}


/**
 * Equivalente vanilla JS de $el.addClass().
 * @param {Element} el
 * @param {...string} classes
 */
export function addClass(el, ...classes) {
    el.classList.add(...classes);
}


/**
 * Equivalente vanilla JS de $el.removeClass().
 * @param {Element} el
 * @param {...string} classes
 */
export function removeClass(el, ...classes) {
    el.classList.remove(...classes);
}


/**
 * Equivalente vanilla JS de $el.toggleClass().
 * @param {Element} el
 * @param {string} cls
 * @param {boolean} [force]
 */
export function toggleClass(el, cls, force) {
    el.classList.toggle(cls, force);
}


/**
 * Equivalente vanilla JS de $el.on(event, fn).
 * @param {Element|Document|Window} el
 * @param {string} event
 * @param {EventListener} fn
 * @param {string} [delegateSelector]
 */
export function on(el, event, fn, delegateSelector) {
    if (delegateSelector) {
        el.addEventListener(event, (e) => {
            const target = /** @type {Element} */ (e.target);
            if (target?.closest(delegateSelector))
                fn.call(target.closest(delegateSelector), e);
        });
    } else {
        el.addEventListener(event, fn);
    }
}


/**
 * Equivalente vanilla JS de $.ajax({ method: 'GET' }).
 * @param {string} url
 * @param {{ method?: string, headers?: Record<string,string>, body?: string }} [options]
 * @returns {Promise<Response>}
 */
export function ajax(url, options = {}) {
    return fetch(url, {
        method:  options.method  || 'GET',
        headers: options.headers || {},
        body:    options.body    || undefined,
    });
}


//  -----  Export default  -----

export default {
    VERSION,
    JQUERY_METHODS,
    qsa,
    qs,
    ready,
    addClass,
    removeClass,
    toggleClass,
    on,
    ajax,
};
