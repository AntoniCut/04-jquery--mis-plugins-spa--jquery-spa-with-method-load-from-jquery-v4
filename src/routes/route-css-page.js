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
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShiki
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
            "#layoutMain": `${pages}/stack/css-page.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/stack/css-page.html`, target: '[data-component-page="cssPage"]' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/pages/stack/css-page-html.html`,  target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/pages/stack/css-page-css.html`,   target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/pages/stack/css-page-scss.html`, target: '[data-shiki="codeScss"]' },
            { url: `${markdownShiki}/pages/stack/css-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
            { url: `${markdownShiki}/pages/stack/css-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
        ],
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