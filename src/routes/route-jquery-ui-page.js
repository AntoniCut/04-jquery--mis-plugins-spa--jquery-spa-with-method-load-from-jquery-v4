/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /route-jquery-ui-page.js  --  /src/routes/route-jquery-ui-page.js  -----  *
    *  -------------------------------------------------------------------------------  *
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
export const routeJqueryUiPage = {
        id: 'jqueryUiPage',
        favicon: `${favicon}/jquery-ui-icon.svg`,
        pageTitle: 'jQuery UI — Interactions, Widgets & Effects',
        path: 'stack/jquery-ui-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/jquery-ui/jquery-ui-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'jQuery UI — Interactions, Widgets & Effects',
        styles: [
            { href: `${styles}/pages/stack/jquery-ui-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/jquery-ui-page.cjs.js` },
            { src: `${scripts}/pages/stack/jquery-ui-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};