/////////////////
// FORMULARIOS //
/////////////////

// IMPORTS ESPECIFICOS

import { Subscriber } from './subscriber.js';
import { Newsletter } from './newsletter.js';
import emptyMessage from '../cart/toggleCart.js';

// DECLARAR VARIABLES

const notifications = document.getElementById('notifications');
const greeting = document.getElementById('greeting');

// FORMULARIO DE SUSCRIPCION

const subscribeForm = document.createElement('form');
subscribeForm.classList.add('newsletter');
subscribeForm.innerHTML = `
    <h2>Newsletter</h2>
    <p>¡Suscribite para recibir nuestras últimas novedades!</p>
    <input id="subscriber-name" type="text" required="required" placeholder="Ingresá tu nombre">
    <input id="subscriber-surname" type="text" required="required" placeholder="Ingresá tu apellido">
    <input id="subscriber-email" type="email" required="required" placeholder="Ingresá tu e-mail">
    <input type="submit" value="Suscribirse">
`;
notifications.appendChild(subscribeForm);

// FORMULARIO PARA CANCELAR SUSCRIPCION

const unsubscribeForm = document.createElement('form');
unsubscribeForm.classList.add('newsletter');
unsubscribeForm.innerHTML = `
    <h2>Newsletter</h2>
    <p id="goodbye">¿Querés dejar de recibir nuestras últimas novedades?</p>
    <input id="unsubscribe-btn" type="submit" value="Cancelar suscripción">
`;
notifications.appendChild(unsubscribeForm);

// ABRIR Y CERRAR FORMULARIOS

document.getElementById('toggle-form-btn').addEventListener('click', () => {
    if (localStorage.getItem('subscriber name') == null) {
        subscribeForm.classList.toggle('newsletter__show');
        emptyMessage.classList.remove('empty-message__show');
    } else {
        unsubscribeForm.classList.toggle('newsletter__show');
        emptyMessage.classList.remove('empty-messagee__show');
    };
});

// CREAR NUEVO SUSCRIPTOR Y SALUDARLO, EN BASE A LOS DATOS INGRESADOS EN EL FORMULARIO

subscribeForm.addEventListener('submit', function(e) {
    const subscriberName = document.getElementById('subscriber-name').value.toLowerCase();
    const subscriberSurname = document.getElementById('subscriber-surname').value.toLowerCase();
    const subscriberEmail = document.getElementById('subscriber-email').value.toLowerCase();

    const subscriber = new Subscriber(subscriberName, subscriberSurname, subscriberEmail);
    const newsletter = new Newsletter();

    newsletter.subscribe(subscriber);
    newsletter.sayHello(subscriber);

    greeting.style.display = 'inline';
    subscribeForm.classList.remove('newsletter__show');

    e.preventDefault();
});

// CANCELAR SUSCRIPCION, ELIMINANDO LOS DATOS ALOJADOS EN EL LOCAL STORAGE

document.getElementById('unsubscribe-btn').addEventListener('click', () => {
    localStorage.removeItem('subscriber name'), localStorage.removeItem('newsletter');
    unsubscribeForm.classList.remove('newsletter__show');
});

// ACTUALIZAR SALUDO

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('subscriber name') == null) {
        greeting.style.display = 'none';
    }
    else {
        greeting.textContent = `¡Hola, ${localStorage.getItem('subscriber name')}!`;
    } 
}, false);

// EXPORT

export { subscribeForm, unsubscribeForm };