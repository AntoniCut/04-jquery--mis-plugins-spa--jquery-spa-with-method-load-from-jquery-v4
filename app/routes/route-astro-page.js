/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /route-astro-page.js  --  /src/routes/route-astro-page.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeAstroPage = {
    id: 'astroPage',
    favicon: `${favicon}/astro-official.svg`,
    pageTitle: 'Astro — Framework de Sitios Estáticos',
    path: 'astro-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/astro-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/astro-page.html`, target: '[data-component-page="astroPage"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/astro-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/astro-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/astro-page-scss.html`, target: '[data-shiki="codeScss"]' },
        { url: `${MarkdownShikiHtml}/pages/astro-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/astro-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'Astro — Framework de Sitios Estáticos',
    styles: [
        { href: `${styles}/astro-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/astro-page.cjs.js` },
        { src: `${scripts}/js/pages/astro-page.esm.js`, isModule: true },
    ]
};