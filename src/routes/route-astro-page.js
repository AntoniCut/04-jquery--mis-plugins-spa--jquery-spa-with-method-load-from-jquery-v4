/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /route-astro-page.js  --  /src/routes/route-astro-page.js  -----  *
    *  -----------------------------------------------------------------------------  *
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
export const routeAstroPage = {
        id: 'astroPage',
        favicon: `${favicon}/astro-official.svg`,
        pageTitle: 'Astro — Framework de Sitios Estáticos',
        path: 'stack/astro-page',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/stack/astro-page.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/stack/astro-page.html`, target: '[data-component-page="astroPage"]' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/pages/stack/astro-page-html.html`,  target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/pages/stack/astro-page-css.html`,   target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/pages/stack/astro-page-scss.html`, target: '[data-shiki="codeScss"]' },
            { url: `${markdownShiki}/pages/stack/astro-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
            { url: `${markdownShiki}/pages/stack/astro-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
        ],
        headerTitle: 'Astro — Framework de Sitios Estáticos',
        styles: [
            { href: `${styles}/pages/stack/astro-page.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/pages/stack/astro-page.cjs.js` },
            { src: `${scripts}/pages/stack/astro-page.esm.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};