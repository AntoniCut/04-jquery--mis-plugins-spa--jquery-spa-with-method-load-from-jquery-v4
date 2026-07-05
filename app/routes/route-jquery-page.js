/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /route-jquery-page.js  --  /src/routes/route-jquery-page.js  -----  *
    *  --------------------------------------------------------------------------------  *
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
export const routeJqueryPage = {
        id: 'jqueryPage',
        favicon: `${favicon}/jquery-icon.svg`,
        pageTitle: 'jQuery — The Write Less, Do More Library',
        path: 'stack/jquery-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/jquery/jquery-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'jQuery — The Write Less, Do More Library',
        styles: [
            { href: `${styles}/pages/stack/jquery-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/jquery-page.cjs.js` },
            { src: `${scripts}/pages/stack/jquery-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};