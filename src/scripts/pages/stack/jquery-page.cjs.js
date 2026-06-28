// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /jquery-page.cjs.js  --  /src/scripts/js/pages/jquery-page.cjs.js  -----  *
    *  ---------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Comparativa de jQuery vs Vanilla JS.
    *  Demuestra equivalencias entre la API de jQuery y el DOM nativo.
*/

(function () {

    console.log('\n');
    console.warn('-----  jquery-page.cjs.js  -----  jQuery vs Vanilla JS  -----');
    console.log('\n');


    /*
        -------------------------------------------------------
        -----  Equivalencias jQuery → Vanilla JS  -----
        -------------------------------------------------------
    */

    var equivalencias = [
        { jquery: "$('#id')",                       vanilla: "document.getElementById('id')" },
        { jquery: "$('.clase')",                    vanilla: "document.querySelectorAll('.clase')" },
        { jquery: "$el.html('<p>Hi</p>')",          vanilla: "el.innerHTML = '<p>Hi</p>'" },
        { jquery: "$el.text('Hola')",               vanilla: "el.textContent = 'Hola'" },
        { jquery: "$el.val()",                      vanilla: "el.value" },
        { jquery: "$el.attr('src')",                vanilla: "el.getAttribute('src')" },
        { jquery: "$el.css('color', 'red')",        vanilla: "el.style.color = 'red'" },
        { jquery: "$el.addClass('activo')",         vanilla: "el.classList.add('activo')" },
        { jquery: "$el.removeClass('activo')",      vanilla: "el.classList.remove('activo')" },
        { jquery: "$el.toggleClass('activo')",      vanilla: "el.classList.toggle('activo')" },
        { jquery: "$el.on('click', fn)",            vanilla: "el.addEventListener('click', fn)" },
        { jquery: "$el.off('click', fn)",           vanilla: "el.removeEventListener('click', fn)" },
        { jquery: "$el.trigger('click')",           vanilla: "el.dispatchEvent(new Event('click'))" },
        { jquery: "$el.append('<span/>')",          vanilla: "el.insertAdjacentHTML('beforeend', '<span/>')" },
        { jquery: "$el.prepend('<span/>')",         vanilla: "el.insertAdjacentHTML('afterbegin', '<span/>')" },
        { jquery: "$el.remove()",                   vanilla: "el.remove()" },
        { jquery: "$el.empty()",                    vanilla: "el.innerHTML = ''" },
        { jquery: "$el.show()",                     vanilla: "el.style.display = ''" },
        { jquery: "$el.hide()",                     vanilla: "el.style.display = 'none'" },
        { jquery: "$.get(url).done(fn)",            vanilla: "fetch(url).then(fn)" },
        { jquery: "$(document).ready(fn)",          vanilla: "document.addEventListener('DOMContentLoaded', fn)" },
    ];

    console.log('-----  jQuery  →  Vanilla JS  -----');
    console.log('');

    equivalencias.forEach(function (item) {
        console.log('  jQuery  : ' + item.jquery);
        console.log('  Vanilla : ' + item.vanilla);
        console.log('  ' + '-'.repeat(60));
    });


    /*
        -------------------------------------------------------
        -----  Métodos jQuery agrupados por categoría  -----
        -------------------------------------------------------
    */

    var categorias = {
        'DOM':        ['html', 'text', 'val', 'attr', 'css', 'addClass', 'removeClass', 'toggleClass'],
        'Traversal':  ['find', 'filter', 'children', 'parent', 'siblings', 'closest', 'each'],
        'Events':     ['on', 'off', 'trigger', 'click', 'submit', 'change', 'focus', 'blur'],
        'Effects':    ['fadeIn', 'fadeOut', 'slideDown', 'slideUp', 'animate', 'toggle'],
        'AJAX':       ['ajax', 'get', 'post', 'getJSON', 'load'],
        'DOM Mod':    ['append', 'prepend', 'before', 'after', 'remove', 'empty', 'clone'],
    };

    console.log('\n-----  Métodos jQuery por categoría  -----');

    Object.keys(categorias).forEach(function (cat) {
        console.log('\n  ' + cat + ':');
        categorias[cat].forEach(function (method) {
            console.log('    .' + method + '()');
        });
    });

    console.log('\n');

})();
