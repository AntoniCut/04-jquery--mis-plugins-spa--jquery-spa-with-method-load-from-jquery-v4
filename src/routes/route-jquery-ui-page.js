/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  /route-jquery-ui-page.js  --  /src/routes/route-jquery-ui-page.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
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
            "#layoutMain": `${pages}/stack/jquery-ui-page.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/stack/jquery-ui-page.html`, target: '[data-component-page="jqueryUiPage"]' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/pages/stack/jquery-ui-page-html.html`,  target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/pages/stack/jquery-ui-page-css.html`,   target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/pages/stack/jquery-ui-page-scss.html`, target: '[data-shiki="codeScss"]' },
            { url: `${markdownShiki}/pages/stack/jquery-ui-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
            { url: `${markdownShiki}/pages/stack/jquery-ui-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
        ],
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