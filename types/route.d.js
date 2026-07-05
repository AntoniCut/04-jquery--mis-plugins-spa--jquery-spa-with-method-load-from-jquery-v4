/*
    *  --------------------------------------------  *
    *  -----  /route.d.js  --  /types/route.d.js  -----  *
    *  --------------------------------------------  *
*/


/// <reference path="./route-components.d.js" />
/// <reference path="./route-script.d.js" />
/// <reference path="./route-style.d.js" />
/// <reference path="./route-lib.d.js" />


/**
 * ---------------------
 * -----  `Route`  -----
 * ---------------------
 * @typedef {Object} Route - Objeto de configuración de cada ruta del SPA.
 * @property {string} id - Identificador único de la ruta.
 * @property {string} path - URL interna asociada a la vista.
 * @property {string} pageTitle - Título mostrado en la etiqueta `<title>`.
 * @property {string} headerTitle - Título que se mostrará dentro del layout-header.
 * @property {string} favicon - Ruta del favicon específico de la vista.
 * @property {RouteComponents} components - Mapa selector → URL de componente HTML.
 * @property {RouteStyle[]|null} styles - Lista de hojas CSS asociadas a la vista (opcional).
 * @property {RouteScript[]|null} scripts - Lista de scripts a cargar dinámicamente (opcional).
 * @property {RouteLib[]|null} [libs] - Lista de módulos de jQueryUI a cargar bajo demanda para esta ruta (opcional).
 */