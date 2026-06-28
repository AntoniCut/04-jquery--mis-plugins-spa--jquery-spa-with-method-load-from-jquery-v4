/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /javascript-page.esm.js  --  /src/scripts/js/pages/javascript-page.esm.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
    *
    *  Script ESM (ES Modules) — Patrones modernos de JavaScript ES6+.
    *  Demuestra clases, generadores, async/await y patrones funcionales con export/import.
*/


//  -----  Constantes exportadas  -----

/** Versión del módulo */
export const VERSION = '1.0.0';

/** Características incorporadas en cada versión de ECMAScript */
export const ES_VERSIONS = Object.freeze({
    ES6:  ['let/const', 'Arrow Functions', 'Classes', 'Template Literals', 'Destructuring', 'Spread/Rest', 'Modules', 'Promises', 'Symbol', 'Map/Set'],
    ES7:  ['Array.prototype.includes', 'Exponentiation operator (**)'],
    ES8:  ['async/await', 'Object.entries/values', 'String padding', 'Trailing commas'],
    ES9:  ['Rest/Spread for objects', 'Async iteration', 'Promise.finally', 'RegExp improvements'],
    ES10: ['Array.flat/flatMap', 'Object.fromEntries', 'String.trimStart/trimEnd', 'Optional catch binding'],
    ES11: ['Optional Chaining (?.)', 'Nullish Coalescing (??)', 'BigInt', 'Promise.allSettled', 'globalThis'],
    ES12: ['Logical assignment (&&=, ||=, ??=)', 'Numeric separators (1_000)', 'Promise.any', 'String.replaceAll'],
    ES13: ['Array.at()', 'Object.hasOwn()', 'Top-level await', 'Error.cause'],
});


//  -----  1. Closure funcional (ES6+)  -----

/**
 * Crea un contador encapsulado con estado privado (closure).
 * @param {number} [initial=0]
 * @returns {{ increment(): number, decrement(): number, reset(): number, value(): number }}
 */
export const makeCounter = (initial = 0) => {
    let _count = initial;

    return {
        increment: () => ++_count,
        decrement: () => --_count,
        reset:     () => { _count = 0; return _count; },
        value:     () => _count,
    };
};


//  -----  2. EventEmitter (clase ES6)  -----

/**
 * Emisor de eventos simple basado en clases ES6.
 */
export class EventEmitter {

    #events = new Map();

    /**
     * Suscribe un listener a un evento.
     * @param {string} event
     * @param {Function} listener
     * @returns {this}
     */
    on(event, listener) {
        if (!this.#events.has(event)) this.#events.set(event, []);
        this.#events.get(event).push(listener);
        return this;
    }

    /**
     * Elimina un listener de un evento.
     * @param {string} event
     * @param {Function} listener
     * @returns {this}
     */
    off(event, listener) {
        if (!this.#events.has(event)) return this;
        this.#events.set(event, this.#events.get(event).filter((l) => l !== listener));
        return this;
    }

    /**
     * Emite un evento con los argumentos dados.
     * @param {string} event
     * @param {...any} args
     * @returns {boolean}
     */
    emit(event, ...args) {
        if (!this.#events.has(event)) return false;
        this.#events.get(event).forEach((l) => l(...args));
        return true;
    }

    /**
     * Devuelve el número de listeners de un evento.
     * @param {string} event
     * @returns {number}
     */
    listenerCount(event) {
        return this.#events.get(event)?.length ?? 0;
    }
}


//  -----  3. Composición funcional (pipe)  -----

/**
 * Compone funciones de izquierda a derecha (pipe).
 * @param {...Function} fns
 * @returns {Function}
 */
export const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);


/**
 * Compone funciones de derecha a izquierda (compose).
 * @param {...Function} fns
 * @returns {Function}
 */
export const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);


//  -----  4. Memoización  -----

/**
 * Memoriza el resultado de una función pura para optimizar llamadas repetidas.
 * @template T
 * @param {(...args: any[]) => T} fn
 * @returns {(...args: any[]) => T}
 */
export function memoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}


//  -----  5. Generador de IDs únicos  -----

/**
 * Generador infinito de IDs únicos con prefijo.
 * @param {string} [prefix='id']
 * @returns {Generator<string>}
 */
export function* idGenerator(prefix = 'id') {
    let i = 1;
    while (true) {
        yield `${prefix}-${String(i++).padStart(4, '0')}`;
    }
}


//  -----  6. Fetch helper con async/await  -----

/**
 * Realiza un GET a una URL y devuelve los datos JSON.
 * Lanza un error si la respuesta no es OK.
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<unknown>}
 */
export async function fetchJSON(url, options = {}) {
    const response = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...options.headers } });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText} — ${url}`);
    }

    return response.json();
}


//  -----  Export default  -----

export default {
    VERSION,
    ES_VERSIONS,
    makeCounter,
    EventEmitter,
    pipe,
    compose,
    memoize,
    idGenerator,
    fetchJSON,
};
