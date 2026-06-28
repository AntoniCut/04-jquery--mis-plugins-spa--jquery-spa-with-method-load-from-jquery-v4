// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /jquery-ui-page.cjs.js  --  /src/scripts/js/pages/jquery-ui-page.cjs.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Catálogo de widgets, interactions y effects de jQuery UI.
    *  Muestra ejemplos de inicialización y las opciones principales de cada componente.
*/

(function () {

    console.log('\n');
    console.warn('-----  jquery-ui-page.cjs.js  -----  jQuery UI  -----');
    console.log('\n');


    /*
        -------------------------------------------------------
        -----  Widgets  -----
        -------------------------------------------------------
    */

    var widgets = [
        { name: 'Accordion',    call: "$('#accordion').accordion({ collapsible: true, active: 0 });" },
        { name: 'Autocomplete', call: "$('#tags').autocomplete({ source: ['JavaScript', 'jQuery', 'CSS'] });" },
        { name: 'Button',       call: "$('#btn').button({ label: 'Guardar', icons: { primary: 'ui-icon-disk' } });" },
        { name: 'Datepicker',   call: "$('#date').datepicker({ dateFormat: 'dd/mm/yy', minDate: 0 });" },
        { name: 'Dialog',       call: "$('#dialog').dialog({ autoOpen: false, modal: true, title: 'Ventana' });" },
        { name: 'Menu',         call: "$('#menu').menu();" },
        { name: 'Progressbar',  call: "$('#progress').progressbar({ value: 60, max: 100 });" },
        { name: 'Slider',       call: "$('#slider').slider({ min: 0, max: 100, value: 50, step: 5 });" },
        { name: 'Spinner',      call: "$('#spinner').spinner({ min: 0, max: 99, step: 1 });" },
        { name: 'Tabs',         call: "$('#tabs').tabs({ active: 0, collapsible: false });" },
        { name: 'Tooltip',      call: "$('body').tooltip({ items: '[title]', track: true });" },
    ];

    console.log('-----  Widgets — ejemplos de inicialización  -----\n');
    widgets.forEach(function (w) {
        console.log('  ' + w.name.padEnd(14) + ': ' + w.call);
    });


    /*
        -------------------------------------------------------
        -----  Interactions  -----
        -------------------------------------------------------
    */

    var interactions = [
        { name: 'Draggable', call: "$('#box').draggable({ containment: 'parent', opacity: 0.7 });" },
        { name: 'Droppable', call: "$('#drop').droppable({ accept: '.drag-item', drop: function(e, ui) {} });" },
        { name: 'Resizable', call: "$('#box').resizable({ handles: 'se', minWidth: 100, maxWidth: 500 });" },
        { name: 'Selectable', call: "$('#list').selectable({ filter: 'li' });" },
        { name: 'Sortable',   call: "$('#list').sortable({ axis: 'y', placeholder: 'ui-state-highlight' });" },
    ];

    console.log('\n-----  Interactions — ejemplos de inicialización  -----\n');
    interactions.forEach(function (i) {
        console.log('  ' + i.name.padEnd(12) + ': ' + i.call);
    });


    /*
        -------------------------------------------------------
        -----  Effects  -----
        -------------------------------------------------------
    */

    var effects = [
        'blind', 'bounce', 'clip', 'drop', 'explode',
        'fade', 'fold', 'highlight', 'puff', 'pulsate',
        'scale', 'shake', 'size', 'slide', 'transfer',
    ];

    console.log('\n-----  Effects disponibles  -----\n');
    console.log('  Uso: $(selector).effect(effectName, options, duration, callback);\n');
    effects.forEach(function (ef) {
        console.log('  $el.effect("' + ef + '", {}, 400, function() { /* done */ });');
    });


    /*
        -------------------------------------------------------
        -----  Clases del tema  -----
        -------------------------------------------------------
    */

    var themeClasses = [
        'ui-widget', 'ui-widget-header', 'ui-widget-content',
        'ui-state-default', 'ui-state-hover', 'ui-state-focus',
        'ui-state-active', 'ui-state-highlight', 'ui-state-error',
        'ui-state-disabled', 'ui-corner-all', 'ui-icon',
    ];

    console.log('\n-----  Clases CSS del tema  -----\n');
    themeClasses.forEach(function (cls) {
        console.log('  .' + cls);
    });

    console.log('\n');

})();
