/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-react-page.js  --  /src/routes/route-react-page.js  -----  *
    *  -----------------------------------------------------------------------  *
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
export const routeReactPage = {
        id: 'reactPage',
        favicon: `${favicon}/react-icon.svg`,
        pageTitle: 'React — Biblioteca UI Declarativa',
        path: 'stack/react-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/react/react-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'React — Biblioteca UI Declarativa',
        styles: [
            { href: `${styles}/pages/stack/react-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/react-page.cjs.js` },
            { src: `${scripts}/pages/stack/react-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};