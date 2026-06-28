/*
    *  ---------------------------------------------------------------------  *
    *  -----  /route-html-page.js  --  /src/routes/route-html-page.js  -----  *
    *  ---------------------------------------------------------------------  *
*/


import { paths } from './paths.js';

const { 
    favicon, 
    layoutHeader, 
    layoutNavbar, 
    pages, 
    pagesComponents,
    MarkdownShikiHtml, 
    layoutFooter, 
    styles, 
    scripts 
} = paths;

/** @type {import("../../types/index.js").Route} */
export const routeHtmlPage = {
    id: 'htmlPage',
    favicon: `${favicon}/html-icon.svg`,
    pageTitle: 'HTML5 — HyperText Markup Language',
    path: 'html-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/html-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/html-page.html`, target: '[data-component-page="htmlPage"]' },
    ], 
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/html-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/html-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/html-page-scss.html`, target: '[data-shiki="codeScss"]' },
        { url: `${MarkdownShikiHtml}/pages/html-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/html-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'HTML5 — HyperText Markup Language',
    styles: [
        { href: `${styles}/html-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/html-page.cjs.js` },
        { src: `${scripts}/js/pages/html-page.esm.js`, isModule: true },
    ]
};
