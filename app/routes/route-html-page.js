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
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShiki
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
            "#layoutMain": `${pages}/stack/html-page.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/stack/html-page.html`, target: '[data-component-page="htmlPage"]' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/pages/stack/html-page-html.html`,  target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/pages/stack/html-page-css.html`,   target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/pages/stack/html-page-scss.html`,  target: '[data-shiki="codeScss"]' },
            { url: `${markdownShiki}/pages/stack/html-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
            { url: `${markdownShiki}/pages/stack/html-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
        ],
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