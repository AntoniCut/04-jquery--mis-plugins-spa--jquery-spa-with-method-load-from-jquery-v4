/*
    *  -------------------------------------------------------------------  *
    *  -----  /route-manifest.js  --  /src/routes/route-manifest.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/**
 * - Manifiesto ligero de rutas: solo id, path y nombre de archivo (sin imports).
 * - Se usa para lazy loading: el modulo de cada ruta se importa dinamicamente bajo demanda.
 * @type {import('../../types/index.js').RouteManifest[]}
 */
export const routeManifest = [

    { id: 'home', path: '', file: 'route-home' },
   
       
    { id: 'htmlPage', path: 'stack/html-page', file: 'route-html-page' },
    { id: 'cssPage', path: 'stack/css-page', file: 'route-css-page' },
    { id: 'javascriptPage', path: 'stack/javascript-page', file: 'route-javascript-page' },
    { id: 'jqueryPage', path: 'stack/jquery-page', file: 'route-jquery-page' },
    { id: 'jqueryUiPage', path: 'stack/jquery-ui-page', file: 'route-jquery-ui-page' },
    { id: 'reactPage', path: 'stack/react-page', file: 'route-react-page' },
    { id: 'astroPage', path: 'stack/astro-page', file: 'route-astro-page' },
    { id: '404NotFoundPage', path: '404', file: 'route-404-not-found-page' },

];
