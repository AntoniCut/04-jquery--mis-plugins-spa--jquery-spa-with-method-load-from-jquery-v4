// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /javascript-page.cjs.js  --  /src/scripts/js/pages/javascript-page.cjs.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
    *
    *  Script CommonJS (IIFE) — Patrones clásicos de JavaScript.
    *  Demuestra closures, módulos, prototipos y patrones funcionales.
*/

(function () {

    console.log('\n');
    console.warn('-----  javascript-page.cjs.js  -----  CommonJS (IIFE)  -----');
    console.log('\n');


    /*
        ----------------------------------------
        -----  1. Closures y estado privado  -----
        ----------------------------------------
    */

    console.log('-----  1. Closure — Contador  -----');

    function makeCounter(initial) {
        var _count = initial || 0;

        return {
            increment: function () { return ++_count; },
            decrement: function () { return --_count; },
            reset:     function () { _count = 0; return _count; },
            value:     function () { return _count; },
        };
    }

    var counter = makeCounter(10);
    console.log('Valor inicial:', counter.value());
    counter.increment();
    counter.increment();
    counter.increment();
    console.log('Después de 3 incrementos:', counter.value());
    counter.decrement();
    console.log('Después de 1 decremento:', counter.value());
    counter.reset();
    console.log('Después de reset:', counter.value());


    /*
        ------------------------------------------------
        -----  2. Patrón módulo con IIFE anidada  -----
        ------------------------------------------------
    */

    console.log('\n-----  2. Module Pattern  -----');

    var EventEmitter = (function () {

        function EventEmitter() {
            this._events = {};
        }

        EventEmitter.prototype.on = function (event, listener) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            this._events[event].push(listener);
            return this;
        };

        EventEmitter.prototype.off = function (event, listener) {
            if (!this._events[event]) return this;
            this._events[event] = this._events[event].filter(function (l) {
                return l !== listener;
            });
            return this;
        };

        EventEmitter.prototype.emit = function (event) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (!this._events[event]) return false;
            this._events[event].forEach(function (listener) {
                listener.apply(null, args);
            });
            return true;
        };

        EventEmitter.prototype.listenerCount = function (event) {
            return (this._events[event] || []).length;
        };

        return EventEmitter;

    })();

    var emitter = new EventEmitter();

    emitter.on('data', function (msg) {
        console.log('Evento "data" recibido:', msg);
    });

    emitter.on('data', function (msg) {
        console.log('Segundo listener:', msg.toUpperCase());
    });

    console.log('Listeners en "data":', emitter.listenerCount('data'));
    emitter.emit('data', 'hola mundo');


    /*
        -------------------------------------------
        -----  3. Funciones de orden superior  -----
        -------------------------------------------
    */

    console.log('\n-----  3. Higher-Order Functions  -----');

    function pipe() {
        var fns = Array.prototype.slice.call(arguments);
        return function (value) {
            return fns.reduce(function (acc, fn) { return fn(acc); }, value);
        };
    }

    var double  = function (n) { return n * 2; };
    var addTen  = function (n) { return n + 10; };
    var square  = function (n) { return n * n; };

    var transform = pipe(double, addTen, square);

    console.log('pipe(double, addTen, square)(3):');
    console.log('  double(3) = 6  →  addTen(6) = 16  →  square(16) = 256');
    console.log('  Resultado:', transform(3));


    /*
        ------------------------------------------
        -----  4. Memoización (optimización)  -----
        ------------------------------------------
    */

    console.log('\n-----  4. Memoización  -----');

    function memoize(fn) {
        var cache = {};
        return function () {
            var key = JSON.stringify(Array.prototype.slice.call(arguments));
            if (cache[key] !== undefined) {
                console.log('  (caché) clave:', key);
                return cache[key];
            }
            cache[key] = fn.apply(null, arguments);
            return cache[key];
        };
    }

    function slowFactorial(n) {
        if (n <= 1) return 1;
        return n * slowFactorial(n - 1);
    }

    var factorial = memoize(slowFactorial);

    console.log('factorial(5):', factorial(5));
    console.log('factorial(5) (desde caché):', factorial(5));
    console.log('factorial(8):', factorial(8));

    console.log('\n');

})();
