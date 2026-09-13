// Menú móvil
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.mainnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Tabs (usados en aplicacion.html)
  var tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});
