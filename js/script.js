// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => navbarNav.classList.toggle('active');
document.getElementById('hamburger-menu').addEventListener('click', function (event) {
  event.preventDefault();
});

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// slider

// Menu navigasi
// Daftar section dan menu yang akan dihubungkan
const sections = document.querySelectorAll('section');
const menuItems = {
  home: document.getElementById('menu-home'),
  about: document.getElementById('menu-about'),
  menu: document.getElementById('menu-menu'),
  referensi: document.getElementById('menu-referensi'),
  contact: document.getElementById('menu-contact'),
};

// Callback untuk IntersectionObserver
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    let menu = menuItems[entry.target.id];
    if (entry.isIntersecting) {
      // Jika elemen terlihat, tambahkan kelas 'active' pada menu terkait
      menu.classList.add('aktif');
    } else {
      // Jika elemen keluar dari layar, hapus kelas 'active'
      menu.classList.remove('aktif');
    }
  });
};

// Slider Referensi
var slidees = document.querySelectorAll('.slidee');
var btns = document.querySelectorAll('.btn');
let currentSlidee = 1;

// java manual slider
var manualNav = function(manual){
  slidees.forEach((slidee) => {
    slidee.classList.remove('active');

    btns.forEach(btn) => {
      btn.classList.remove('active');
    });
  });

  slidees[manual].classList.add('active');
  btsn[manual].classList.add('active');
}

btsn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlidee= i;
  });
});

// Membuat instance IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
  root: null, // Menggunakan viewport sebagai area pengamatan
  threshold: 0.5, // Trigger saat 50% elemen terlihat di layar
});

// Mengamati setiap section
sections.forEach((section) => {
  observer.observe(section);
});

// Scroll tombol wa
let lastScrollTop = 0;
let scrollThreshold = 200; // Atur batas sensitivitas
let whatsApp = document.querySelector('.WhatsApp');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hanya deteksi scroll jika pergerakan melebihi ambang batas
  if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
    if (scrollTop > lastScrollTop) {
      // Scroll ke bawah
      whatsApp.classList.add('expand');
    } else {
      // Scroll ke atas
      whatsApp.classList.remove('expand');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Perbarui posisi terakhir
  }
});
