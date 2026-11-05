/* Menu bar title drop-down: click the title to see where this page sits.
   Markup: <div class="mac-menubar" data-up='[["Homeschool Wiki","../index.html"],["boccbo.cc","https://boccbo.cc/"]]'> */
(function(){
  function init(){
    var bar = document.querySelector('.mac-menubar'); if (!bar) return;
    var up; try { up = JSON.parse(bar.getAttribute('data-up') || '[]'); } catch (e) { up = []; }
    var app = bar.querySelector('.mb-app'); if (!app || !up.length) return;
    app.classList.add('has-menu'); app.setAttribute('role','button'); app.setAttribute('tabindex','0');
    app.setAttribute('aria-haspopup','true'); app.setAttribute('aria-expanded','false');
    var chev = document.createElement('span'); chev.className = 'mb-chev'; app.appendChild(chev);
    var menu = document.createElement('ul'); menu.className = 'mb-menu'; menu.hidden = true;
    up.forEach(function(u, i){
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = u[1]; a.textContent = u[0]; a.style.paddingLeft = (14 + i * 12) + 'px';
      li.appendChild(a); menu.appendChild(li);
    });
    app.appendChild(menu);
    function set(open){ menu.hidden = !open; app.classList.toggle('open', open); app.setAttribute('aria-expanded', open); }
    app.addEventListener('click', function(e){ if (e.target.closest('.mb-menu')) return; set(menu.hidden); });
    app.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(menu.hidden); } else if (e.key === 'Escape') set(false); });
    document.addEventListener('click', function(e){ if (!app.contains(e.target)) set(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
