// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------  *
    *  -----  /home.cjs.js  --  /src/scripts/js/pages/home.cjs.js  -----  *
    *  -------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Demostración de la configuración del plugin
    *  spa-loader-content-html v3 con patrones clásicos de JavaScript.
*/

(function () {

    console.log('\n');
    console.warn('-----  home.cjs.js  -----  spa-loader-content-html v3  -----');
    console.log('\n');


    /*
        -------------------------------------------------------
        -----  Constantes del plugin  -----
        -------------------------------------------------------
    */

    var PLUGIN_NAME = 'spa-loader-content-html';
    var VERSION     = '3.0.0';

    var SPA_EVENTS = {
        ROUTE_LOADED:       'spa:route-loaded',
        FIRST_ROUTE_LOADED: 'spa:first-route-loaded',
        ROUTE_LOAD_ERROR:   'spa:route-load-error',
    };


    /*
        -------------------------------------------------------
        -----  Utilidades de rutas  -----
        -------------------------------------------------------
    */

    /**
     * Normaliza una ruta quitando el prefijo base y los slashes extremos.
     * @param {string} raw
     * @param {string} base
     * @returns {string}
     */
    function normalizeSpaPath(raw, base) {
        var path = String(raw || '');
        var cleanBase = String(base || '');
        if (cleanBase && path.indexOf(cleanBase) === 0)
            path = path.slice(cleanBase.length);
        return path.replace(/^\/|\/$/g, '');
    }


    /**
     * Construye el pathname absoluto de la SPA.
     * @param {string} base
     * @param {string} routePath
     * @returns {string}
     */
    function buildSpaPathname(base, routePath) {
        var cleanBase = (base || '').replace(/\/$/, '');
        var segment   = routePath ? '/' + String(routePath).replace(/^\/|\/$/g, '') : '';
        return (cleanBase + segment).replace(/\/\/+/g, '/') || '/';
    }


    /**
     * Crea una entrada de manifiesto de ruta.
     * @param {string} id
     * @param {string} path
     * @param {string} file
     * @returns {{ id: string, path: string, file: string }}
     */
    function createManifestEntry(id, path, file) {
        return { id: String(id), path: String(path || ''), file: String(file) };
    }


    /*
        -------------------------------------------------------
        -----  Ejemplo de configuración del plugin  -----
        -------------------------------------------------------
    */

    var BASE = '/mis-plugins-spa/spa-loader-content-html-v3';

    var routeManifest = [
        createManifestEntry('home',            '',                     'route-00-home'),
        createManifestEntry('htmlPage',        'html-page',            'route-html-page'),
        createManifestEntry('cssPage',         'css-page',             'route-css-page'),
        createManifestEntry('javascriptPage',  'javascript-page',      'route-javascript-page'),
        createManifestEntry('404NotFoundPage', '404-not-found-page',   'route-404-not-found-page'),
    ];


    /*
        -------------------------------------------------------
        -----  Demostración en consola  -----
        -------------------------------------------------------
    */

    console.log('-----  Plugin  -----');
    console.log('Nombre   :', PLUGIN_NAME);
    console.log('Versión  :', VERSION);

    console.log('\n-----  Eventos personalizados  -----');
    Object.keys(SPA_EVENTS).forEach(function (key) {
        console.log(key.padEnd(20), '→', SPA_EVENTS[key]);
    });

    console.log('\n-----  Route Manifest  -----');
    routeManifest.forEach(function (entry) {
        var id   = ('id: '   + entry.id).padEnd(30);
        var path = ('path: ' + (entry.path || '(home)')).padEnd(34);
        var file = 'file: '  + entry.file;
        console.log(id, path, file);
    });

    console.log('\n-----  Pathnames construidos  -----');
    routeManifest.forEach(function (entry) {
        var pathname = buildSpaPathname(BASE, entry.path);
        console.log(pathname);
    });

    console.log('\n-----  normalizeSpaPath  -----');
    var testPaths = [
        BASE + '/',
        BASE + '/html-page',
        BASE + '/css-page',
        BASE + '/javascript-page',
        BASE + '/404-not-found-page',
    ];
    testPaths.forEach(function (raw) {
        console.log(
            raw.padEnd(70),
            '→  "' + normalizeSpaPath(raw, BASE) + '"'
        );
    });

    console.log('\n');

})();
