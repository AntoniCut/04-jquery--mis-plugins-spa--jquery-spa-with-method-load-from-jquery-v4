/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /jquery-ui-page.esm.js  --  /src/scripts/js/pages/jquery-ui-page.esm.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades jQuery UI exportadas como módulo nativo.
    *  Describe los widgets, interactions y effects disponibles en jQuery UI.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Widgets de jQuery UI con sus opciones principales */
export const WIDGETS = Object.freeze([
    { name: 'Accordion',    options: ['active', 'collapsible', 'event', 'heightStyle', 'icons'] },
    { name: 'Autocomplete', options: ['source', 'minLength', 'delay', 'appendTo', 'position'] },
    { name: 'Button',       options: ['disabled', 'icons', 'label', 'showLabel'] },
    { name: 'Datepicker',   options: ['dateFormat', 'minDate', 'maxDate', 'showAnim', 'numberOfMonths'] },
    { name: 'Dialog',       options: ['autoOpen', 'buttons', 'draggable', 'modal', 'position', 'resizable', 'title', 'width'] },
    { name: 'Menu',         options: ['disabled', 'icons', 'items', 'menus', 'position', 'role'] },
    { name: 'Progressbar',  options: ['disabled', 'max', 'value'] },
    { name: 'Slider',       options: ['animate', 'disabled', 'max', 'min', 'orientation', 'range', 'step', 'value', 'values'] },
    { name: 'Spinner',      options: ['culture', 'disabled', 'incremental', 'max', 'min', 'page', 'step'] },
    { name: 'Tabs',         options: ['active', 'collapsible', 'disabled', 'event', 'heightStyle', 'hide', 'show'] },
    { name: 'Tooltip',      options: ['content', 'disabled', 'hide', 'items', 'position', 'show', 'tooltipClass', 'track'] },
]);

/** Interactions de jQuery UI */
export const INTERACTIONS = Object.freeze([
    'Draggable', 'Droppable', 'Resizable', 'Selectable', 'Sortable',
]);

/** Effects de jQuery UI */
export const EFFECTS = Object.freeze([
    'blind', 'bounce', 'clip', 'drop', 'explode',
    'fade', 'fold', 'highlight', 'puff', 'pulsate',
    'scale', 'shake', 'size', 'slide', 'transfer',
]);

/** Clases CSS del tema de jQuery UI */
export const THEME_CLASSES = Object.freeze([
    'ui-widget', 'ui-widget-header', 'ui-widget-content',
    'ui-state-default', 'ui-state-hover', 'ui-state-focus',
    'ui-state-active', 'ui-state-highlight', 'ui-state-error',
    'ui-state-disabled',
    'ui-corner-all', 'ui-corner-top', 'ui-corner-bottom',
    'ui-icon', 'ui-helper-clearfix', 'ui-helper-hidden-accessible',
]);


//  -----  Funciones exportadas  -----

/**
 * Devuelve los datos de un widget por nombre (case insensitive).
 * @param {string} name
 * @returns {{ name: string, options: string[] } | undefined}
 */
export function getWidget(name) {
    return WIDGETS.find(w => w.name.toLowerCase() === name.toLowerCase());
}


/**
 * Devuelve si un efecto dado existe en jQuery UI.
 * @param {string} effect
 * @returns {boolean}
 */
export function isValidEffect(effect) {
    return EFFECTS.includes(effect);
}


/**
 * Genera la llamada jQuery UI para inicializar un widget con opciones.
 * @param {string} selector
 * @param {string} widget       - Nombre del widget en camelCase (ej: 'datepicker').
 * @param {Record<string, unknown>} [options]
 * @returns {string}
 */
export function buildWidgetCall(selector, widget, options = {}) {
    const opts = JSON.stringify(options, null, 2);
    return opts === '{}'
        ? `$('${selector}').${widget}();`
        : `$('${selector}').${widget}(${opts});`;
}


//  -----  Export default  -----

export default {
    VERSION,
    WIDGETS,
    INTERACTIONS,
    EFFECTS,
    THEME_CLASSES,
    getWidget,
    isValidEffect,
    buildWidgetCall,
};
