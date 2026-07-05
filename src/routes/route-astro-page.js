/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-astro-page.js  --  /src/routes/route-astro-page.js  -----  *
    *  -----------------------------------------------------------------------  *
*/


import { paths } from './paths.js';
/// <reference path="../../types/route.d.js" />


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    pages,
    layoutFooter,
    styles,
    scripts,
} = paths;



/** @type {Route} */
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
            "#layoutMain": `${pages}/stack/astro/astro-page.html`,
            "#layoutFooter": layoutFooter,
        },
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