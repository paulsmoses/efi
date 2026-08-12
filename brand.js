/* EFI brand motifs — drawn in JS so no image assets are needed.
   Elements are opt-in: a page only gets a motif if the target id is present. */
(function () {
  'use strict';

  function rays(el, count, r1, r2, r2alt) {
    if (!el) return;
    var s = '';
    for (var i = 0; i < count; i++) {
      var a = i * (360 / count) * Math.PI / 180;
      var outer = (i % 2 && r2alt) ? r2alt : r2;
      s += '<line x1="' + (100 + Math.cos(a) * r1).toFixed(1) +
           '" y1="' + (100 + Math.sin(a) * r1).toFixed(1) +
           '" x2="' + (100 + Math.cos(a) * outer).toFixed(1) +
           '" y2="' + (100 + Math.sin(a) * outer).toFixed(1) + '"/>';
    }
    el.innerHTML = s;
  }

  // Hero sunburst — the "spark" motif.
  rays(document.getElementById('rays'), 44, 62, 80, 92);

  // Sun-ray arc frame around the founder / programme photo.
  rays(document.getElementById('arcrays'), 56, 96, 98.5, 100);

  // Footer hand-loom weave band: warp threads crossed by weft.
  var weave = document.getElementById('weave');
  if (weave) {
    var s = '', u = 12, tw = 5, i, r;
    for (i = 0; i < 20; i++) {
      s += '<rect x="' + (i * u + (u - tw) / 2) + '" y="0" width="' + tw + '" height="22" fill="#C1592B" rx="1.5"/>';
    }
    for (r = 0; r < 2; r++) {
      var ry = r * 11 + (11 - tw) / 2;
      for (i = 0; i <= 20; i++) {
        if ((i + r) % 2) continue;
        s += '<rect x="' + (i * u - u / 2) + '" y="' + ry + '" width="' + u + '" height="' + tw + '" fill="#D98E2B" rx="1.5"/>';
      }
    }
    weave.innerHTML = s;
  }

  // Mark the current page in the nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main a.link').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  // Newsletter stub — replace with the real list provider's embed.
  var form = document.getElementById('signup');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      btn.textContent = 'You\u2019re in \u2014 thank you';
      btn.disabled = true;
    });
  }
})();
