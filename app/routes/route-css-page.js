/*
    *  --------------------------------------------------------------------------  *
    *  -----  /route-css-page.js  --  /src/routes/route-css-page.js  -----  *
    *  --------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeCssPage = {
    id: 'cssPage',
    favicon: `${favicon}/css-icon.svg`,
    pageTitle: 'CSS3 — Cascading Style Sheets',
    path: 'css-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/css-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/css-page.html`, target: '[data-component-page="cssPage"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/css-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/css-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/css-page-scss.html`, target: '[data-shiki="codeScss"]' },
        { url: `${MarkdownShikiHtml}/pages/css-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/css-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'CSS3 — Cascading Style Sheets',
    styles: [
        { href: `${styles}/css-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/css-page.cjs.js` },
        { src: `${scripts}/js/pages/css-page.esm.js`, isModule: true },
    ]
};
