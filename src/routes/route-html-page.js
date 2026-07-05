/*
    *  ---------------------------------------------------------------------  *
    *  -----  /route-html-page.js  --  /src/routes/route-html-page.js  -----  *
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
export const routeHtmlPage = {
        id: 'htmlPage',
        favicon: `${favicon}/html-icon.svg`,
        pageTitle: 'HTML5 — HyperText Markup Language',
        path: 'stack/html-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/html/html-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'HTML5 — HyperText Markup Language',
        styles: [
            { href: `${styles}/pages/stack/html-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/html-page.cjs.js` },
            { src: `${scripts}/pages/stack/html-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};