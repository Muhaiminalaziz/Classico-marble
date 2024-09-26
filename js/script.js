// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

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
    console.log(menuItems[entry.target.id]);
    if (entry.isIntersecting) {
      // Jika elemen terlihat, tambahkan kelas 'active' pada menu terkait
      menu.classList.add('aktif');
    } else {
      // Jika elemen keluar dari layar, hapus kelas 'active'
      menu.classList.remove('aktif');
    }
  });
};

// Membuat instance IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
  root: null, // Menggunakan viewport sebagai area pengamatan
  threshold: 0.5, // Trigger saat 50% elemen terlihat di layar
});

// Mengamati setiap section
sections.forEach((section) => {
  observer.observe(section);
});
