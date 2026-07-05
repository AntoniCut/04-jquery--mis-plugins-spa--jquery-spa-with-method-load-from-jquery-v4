/*
    *  ---------------------------------------------------------------------  *
    *  -----  /route-css-page.js  --  /src/routes/route-css-page.js  -----  *
    *  ---------------------------------------------------------------------  *
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
export const routeCssPage = {
        id: 'cssPage',
        favicon: `${favicon}/css-icon.svg`,
        pageTitle: 'CSS3 — Cascading Style Sheets',
        path: 'stack/css-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/css/css-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'CSS3 — Cascading Style Sheets',
        styles: [
            { href: `${styles}/pages/stack/css-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/css-page.cjs.js` },
            { src: `${scripts}/pages/stack/css-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};