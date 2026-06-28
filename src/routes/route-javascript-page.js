/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  /route-javascript-page.js  --  /src/routes/route-javascript-page.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeJavascriptPage = {
    id: 'javascriptPage',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
    path: 'javascript-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/javascript-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/javascript-page.html`, target: '[data-component-page="javascriptPage"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/javascript-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/javascript-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/javascript-page-scss.html`, target: '[data-shiki="codeScss"]' },
        { url: `${MarkdownShikiHtml}/pages/javascript-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/javascript-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
    styles: [
        { href: `${styles}/javascript-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/javascript-page.cjs.js` },
        { src: `${scripts}/js/pages/javascript-page.esm.js`, isModule: true },
    ]
};
