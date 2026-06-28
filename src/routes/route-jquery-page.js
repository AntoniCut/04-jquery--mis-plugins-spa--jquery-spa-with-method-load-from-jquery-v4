/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /route-jquery-page.js  --  /src/routes/route-jquery-page.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeJqueryPage = {
    id: 'jqueryPage',
    favicon: `${favicon}/jquery-icon.svg`,
    pageTitle: 'jQuery — The Write Less, Do More Library',
    path: 'jquery-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/jquery-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/jquery-page.html`, target: '[data-component-page="jqueryPage"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/jquery-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/jquery-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/jquery-page-scss.html`, target: '[data-shiki="codeScss"]' },
        { url: `${MarkdownShikiHtml}/pages/jquery-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/jquery-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'jQuery — The Write Less, Do More Library',
    styles: [
        { href: `${styles}/jquery-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/jquery-page.cjs.js` },
        { src: `${scripts}/js/pages/jquery-page.esm.js`, isModule: true },
    ]
};
