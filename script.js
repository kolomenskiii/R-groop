const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
  mobileNav.hidden = true;
}));

document.querySelectorAll('[data-material]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('material').value = link.dataset.material;
}));

document.getElementById('request-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const body = [
    `Имя: ${values.get('name')}`,
    `Телефон: ${values.get('phone')}`,
    `Материал: ${values.get('material')}`,
    `Объём и адрес доставки: ${values.get('details') || 'Не указаны'}`
  ].join('\n');
  const url = `mailto:SPLF12@mail.ru?subject=${encodeURIComponent('Заявка на поставку инертных материалов')}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'Откроется почтовая программа. Проверьте письмо и отправьте его.';
  window.location.href = url;
});

document.getElementById('year').textContent = new Date().getFullYear();
