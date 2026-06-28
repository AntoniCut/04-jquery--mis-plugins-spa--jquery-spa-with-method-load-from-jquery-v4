/*
    *  -------------------------------------------------------------------------  *
    *  -----  /home.esm.js  --  /src/scripts/js/pages/home.esm.js  -----  *
    *  -------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Utilidades para spa-loader-content-html exportadas
    *  como módulo nativo. Helpers para construir y validar configuraciones SPA.
*/


//  -----  Constantes exportadas  -----

/** Versión del plugin */
export const VERSION = '3.0.0';

/** Nombre del plugin */
export const PLUGIN_NAME = 'spa-loader-content-html';

/** Eventos personalizados emitidos por el plugin */
export const SPA_EVENTS = Object.freeze({
    ROUTE_LOADED:       'spa:route-loaded',
    FIRST_ROUTE_LOADED: 'spa:first-route-loaded',
    ROUTE_LOAD_ERROR:   'spa:route-load-error',
});


//  -----  Funciones exportadas  -----

/**
 * Crea una entrada de manifiesto de ruta con valores validados.
 * @param {string} id   - Identificador único de la ruta.
 * @param {string} path - Segmento de ruta (sin slash inicial).
 * @param {string} file - Nombre del archivo de módulo (sin extensión).
 * @returns {{ id: string, path: string, file: string }}
 */
export function createManifestEntry(id, path, file) {
    if (!id || !file) throw new Error('createManifestEntry: id y file son obligatorios.');
    return { id: String(id), path: String(path ?? ''), file: String(file) };
}


/**
 * Construye el pathname absoluto para la SPA dado un base y un path de ruta.
 * @param {string} base      - Base configurada (ej: '/mis-plugins-spa/v3').
 * @param {string} routePath - Segmento de ruta (puede estar vacío para home).
 * @returns {string}
 */
export function buildSpaPathname(base, routePath) {
    const cleanBase = (base || '').replace(/\/$/, '');
    const segment   = routePath ? `/${String(routePath).replace(/^\/|\/$/g, '')}` : '';
    try {
        return new URL(cleanBase + segment, location.origin).pathname;
    } catch {
        return (cleanBase + segment).replace(/\/\/+/g, '/') || '/';
    }
}


/**
 * Normaliza una ruta quitando el prefijo base y los slashes extremos.
 * @param {string} raw  - Pathname sin normalizar (ej: window.location.pathname).
 * @param {string} base - Base de la SPA.
 * @returns {string}
 */
export function normalizeSpaPath(raw, base) {
    let path = String(raw || '');
    const cleanBase = String(base || '');
    if (cleanBase && path.startsWith(cleanBase))
        path = path.slice(cleanBase.length);
    return path.replace(/^\/|\/$/g, '');
}


/**
 * Comprueba si un href corresponde a una navegación interna de la SPA.
 * @param {string} href - href del enlace a evaluar.
 * @param {string} base - Base de la SPA.
 * @returns {boolean}
 */
export function isSpaLink(href, base) {
    if (!href) return false;
    const abs = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href);
    if (abs) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:'))
        return false;
    if (!base) return true;
    const cleanBase = base.replace(/\/$/, '');
    try {
        const url = new URL(href, location.origin);
        return url.pathname === cleanBase || url.pathname.startsWith(`${cleanBase}/`);
    } catch {
        return false;
    }
}


/**
 * Crea un descriptor de script para la configuración de una ruta.
 * @param {string}  src      - URL del script.
 * @param {boolean} [isModule=false] - Si es ES Module (<script type="module">).
 * @returns {{ src: string, isModule: boolean }}
 */
export function createScriptEntry(src, isModule = false) {
    return { src: String(src), isModule: Boolean(isModule) };
}


/**
 * Crea un descriptor de estilo para la configuración de una ruta.
 * @param {string} href - URL de la hoja de estilos.
 * @returns {{ href: string }}
 */
export function createStyleEntry(href) {
    return { href: String(href) };
}


//  -----  Export default  -----

export default {
    VERSION,
    PLUGIN_NAME,
    SPA_EVENTS,
    createManifestEntry,
    buildSpaPathname,
    normalizeSpaPath,
    isSpaLink,
    createScriptEntry,
    createStyleEntry,
};
