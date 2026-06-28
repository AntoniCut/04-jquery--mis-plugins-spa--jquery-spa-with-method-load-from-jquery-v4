/*
    *  -----------------------------------------------------------  *
    *  -----  /route-home.js  --  /src/routes/route-home.js  -----  *
    *  -----------------------------------------------------------  *
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
export const routeHome = {
        id: 'home',
        favicon: `${favicon}/jquery-icon.svg`,
        pageTitle: 'jQuery SPA With Method Load From jQuery v4',
        path: '',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/home.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/home.html`, target: '[data-component-page="home"]' },
        ],
        MarkdownShikiHtml: [
            { 
                url: `${markdownShiki}/plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery-js.html`, 
                target: '[data-shiki="codeEsmJs"]' 
            }
        ],
        headerTitle: 'Curso de jQuery de Escuela.IT',
        styles: [
            { href: `${styles}/pages/home.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};