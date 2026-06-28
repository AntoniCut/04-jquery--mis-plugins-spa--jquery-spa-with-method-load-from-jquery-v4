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
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShiki
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
            "#layoutMain": `${pages}/stack/javascript-page.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/stack/javascript-page.html`, target: '[data-component-page="javascriptPage"]' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/pages/stack/javascript-page-html.html`,  target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/pages/stack/javascript-page-css.html`,   target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/pages/stack/javascript-page-scss.html`, target: '[data-shiki="codeScss"]' },
            { url: `${markdownShiki}/pages/stack/javascript-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
            { url: `${markdownShiki}/pages/stack/javascript-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
        ],
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