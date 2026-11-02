// script.js - Shoprite demo site
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => 'R' + n.toFixed(2);

// ---------- Cart (saved in the browser) ----------
let cart = [];
try { cart = JSON.parse(localStorage.getItem('cart')) || []; } catch (e) {}
const saveCart = () => { try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (e) {} };

const drawer = document.createElement('aside');
drawer.id = 'drawer';
drawer.innerHTML = '<h3>Your cart</h3><div id="items"></div><p>Total: <b id="total">R0.00</b></p>' +
  '<button class="btn" id="clear">Clear cart</button><button class="btn" id="close">Close</button>';
document.body.appendChild(drawer);

function renderCart() {
  $('#cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  $('#items').innerHTML = cart.length
    ? cart.map((i, n) => '<div class="row"><span>' + i.name + ' × ' + i.qty + '</span><span>' +
        money(i.price * i.qty) + '<button data-rm="' + n + '">✕</button></span></div>').join('')
    : '<p>Your cart is empty.</p>';
  $('#total').textContent = money(cart.reduce((s, i) => s + i.price * i.qty, 0));
}

function toast(text) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = text; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1600);
}

document.addEventListener('click', e => {
  const add = e.target.closest('.add');
  if (add) {
    const card = add.closest('.card');
    const name = card.dataset.name, price = parseFloat(card.dataset.price);
    const found = cart.find(i => i.name === name);
    found ? found.qty++ : cart.push({ name, price, qty: 1 });
    saveCart(); renderCart(); toast(name + ' added to cart');
  }
  if (e.target.id === 'cartBtn' || e.target.closest('#cartBtn')) drawer.classList.add('open');
  if (e.target.id === 'close') drawer.classList.remove('open');
  if (e.target.id === 'clear') { cart = []; saveCart(); renderCart(); }
  if (e.target.dataset.rm !== undefined) { cart.splice(+e.target.dataset.rm, 1); saveCart(); renderCart(); }
});
renderCart();

// ---------- Product search ----------
const search = $('#search');
if (search) {
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    $$('.card').forEach(c => {
      const hit = c.dataset.name.toLowerCase().includes(q);
      c.style.display = hit ? '' : 'none';
      if (hit) shown++;
    });
    $('#empty').style.display = shown ? 'none' : 'block';
  });
}

// ---------- Gallery lightbox ----------
const tiles = $$('.tile');
if (tiles.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  document.body.appendChild(box);
  tiles.forEach(t => t.addEventListener('click', () => {
    box.innerHTML = t.innerHTML; box.classList.add('show');
  }));
  box.addEventListener('click', () => box.classList.remove('show'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('show'); });
}

// ---------- Inquiry form validation ----------
const form = $('#inqForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const msg = $('#message').value.trim();
    let error = '';
    if (name.length < 2) error = 'Please enter your name.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = 'Please enter a valid email address.';
    else if (msg.length < 10) error = 'Your message must be at least 10 characters.';
    $('#error').textContent = error;
    if (error) return;
    // Here you would send the data to your server (fetch / formspree etc.)
    form.reset();
    $('.ok').style.display = 'block';
  });
}