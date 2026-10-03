'use strict';

// O destino de todos os contatos fica centralizado aqui.
const WHATSAPP_NUMBER = '5521974950212';
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  let message = 'Olá! Vim pelo site da 21Go! e gostaria de uma proposta de proteção patrimonial para o meu veículo.';
  if (link.dataset.vehicle) {
    message = `Olá! Vim pelo site da 21Go! e gostaria de uma proposta de proteção patrimonial para ${link.dataset.vehicle === 'carro' ? 'meu' : 'minha'} ${link.dataset.vehicle}.`;
  } else if (link.dataset.topic) {
    message = link.dataset.topic.startsWith('dúvidas')
      ? 'Olá! Vim pelo site da 21Go! e gostaria de tirar minhas dúvidas sobre proteção patrimonial.'
      : `Olá! Vim pelo site da 21Go! e gostaria de conversar sobre ${link.dataset.topic}.`;
  }
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mobileNav.hidden = isOpen;
  document.body.classList.toggle('menu-open', !isOpen);
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});
document.querySelector('#year').textContent = new Date().getFullYear();
