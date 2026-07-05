/*
    *  -----------------------------------------------------------  *
    *  -----  /route-home.js  --  /src/routes/route-home.js  -----  *
    *  -----------------------------------------------------------  *
*/


import { paths } from './paths.js';
/// <reference path="../../types/route.d.js" />


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    pages,
    layoutFooter,
    styles,
    scripts,
} = paths;



/** @type {Route} */
export const routeHome = {
        id: 'home',
        favicon: `${favicon}/jquery-icon.svg`,
        pageTitle: 'jQuery SPA With Method Load From jQuery v4',
        path: '',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/home.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Plugin jQuery SPA With Method Load From jQuery v4',
        styles: [
            { href: `${styles}/pages/home.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/home.cjs.js` },
            { src: `${scripts}/pages/home.esm.js`, type: 'module', exportFunctionName: 'mount' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};