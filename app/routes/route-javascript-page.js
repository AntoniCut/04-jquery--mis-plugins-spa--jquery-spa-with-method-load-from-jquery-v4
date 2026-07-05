/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  /route-javascript-page.js  --  /src/routes/route-javascript-page.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


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


/** @type {import('../../types/index.js').Route} */
export const routeJavascriptPage = {
        id: 'javascriptPage',
        favicon: `${favicon}/javascript-icon.svg`,
        pageTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
        path: 'stack/javascript-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/javascript/javascript-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
        styles: [
            { href: `${styles}/pages/stack/javascript-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/javascript-page.cjs.js` },
            { src: `${scripts}/pages/stack/javascript-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};