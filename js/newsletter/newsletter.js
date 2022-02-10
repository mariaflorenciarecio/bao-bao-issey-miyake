////////////////
// NEWSLETTER //
////////////////

// IMPORT ESPECIFICO

import {subscribeForm} from './forms.js';

// NEWSLETTER

export class Newsletter{

    // CREAR "BASE DE DATOS SUSCRIPTORES"

    constructor() {
        this.subscribers = JSON.parse(localStorage.getItem('newsletter')) || [];
    };

    // GUARDAR NUEVO SUSCRIPTOR EN LA "BASE DE DATOS SUSCRIPTORES"
    
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        localStorage.setItem('newsletter', JSON.stringify(this.subscribers));
        window.localStorage.setItem('subscriber name', subscriber.name.toUpperCase());
        this.resetForm();
    };

    // VACIAR FORMULARIO DE SUSCRIPCION

    resetForm() {
        subscribeForm.reset();
    };

    // SALUDAR SUSCRIPTOR

    sayHello(subscriber) {
        document.getElementById('greeting').textContent = `¡Hola, ${subscriber.name.toUpperCase()}!`;
    };
};