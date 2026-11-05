/* 32x32 one-bit icons in System 7 style. Shared by every page that needs them.
   ICONS[name] is the inner SVG markup; icon(name) wraps it. Needs the dither
   pattern from ICON_DEFS, which icon() pages insert once (see installIconDefs). */
(function(){
  var K = '#000', W = '#fff', D = 'url(#dither)';
  function box(x,y,w,h,f,extra){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+(f||W)+'"'+(extra||'')+'/>'; }
  function path(d,f){ return '<path d="'+d+'" fill="'+(f||'none')+'"/>'; }
  function circ(x,y,r,f){ return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+(f||W)+'"/>'; }

  var ICONS = {
    /* ---------- generic ---------- */
    folder: path('M2.5 7.5h10l2 3h15v18h-27z', W) + path('M2.5 13.5h27') + box(3,14,26,14,D,' stroke="none"') + path('M2.5 13.5h27v15h-27z'),
    doc: path('M6.5 2.5h14l6 6v21h-20z', W) + path('M20.5 2.5v6h6') + path('M10 14.5h12M10 18.5h12M10 22.5h8'),
    web: circ(16,16,12.5) + '<ellipse cx="16" cy="16" rx="5.5" ry="12.5" fill="none"/>' + path('M3.5 16.5h25M6 9.5h20M6 22.5h20'),
    app: box(3.5,5.5,25,21) + box(4,6,24,4,D,' stroke="none"') + path('M3.5 10.5h25') + path('M13 14l8 5-8 5z', K),

    /* ---------- types ---------- */
    books: box(4.5,8.5,6,20) + box(11.5,5.5,7,23,D) + box(19.5,10.5,6,18) + path('M2 28.5h28') +
           path('M4.5 13.5h6M4.5 23.5h6M11.5 10.5h7M19.5 15.5h6'),
    library: box(6.5,3.5,19,25) + path('M6.5 12.5h19M6.5 20.5h19') + box(12,7,8,2,K,' stroke="none"') +
             box(12,15,8,2,K,' stroke="none"') + box(12,23,8,2,K,' stroke="none"'),
    daily: box(4.5,6.5,23,22) + box(4.5,6.5,23,6,K) + path('M10.5 3.5v6M21.5 3.5v6','none') +
           box(9,16,3,3,K,' stroke="none"') + box(14.5,16,3,3,K,' stroke="none"') + box(20,16,3,3,K,' stroke="none"') +
           box(9,22,3,3,K,' stroke="none"') + box(14.5,22,3,3,K,' stroke="none"') + box(20,22,3,3,K,' stroke="none"'),
    history: path('M3.5 11.5L16 4.5l12.5 7z', W) + box(4.5,12.5,23,3) + box(6.5,15.5,3,11,D) + box(12.5,15.5,3,11,D) +
             box(18.5,15.5,3,11,D) + box(24.5,15.5,3,11,D) + box(3.5,26.5,25,3),
    maps: path('M3.5 8.5l8-3 9 3 8-3v19l-8 3-9-3-8 3z', W) + path('M11.5 5.5l9 3v19l-9-3z', D) +
          path('M3.5 8.5l8-3 9 3 8-3v19l-8 3-9-3-8 3z') + path('M11.5 5.5v19M20.5 8.5v19'),
    guess: '<rect x="4.5" y="4.5" width="23" height="23" rx="4" fill="#fff"/>' + circ(11,11,2,K) + circ(21,11,2,K) +
           circ(16,16,2,K) + circ(11,21,2,K) + circ(21,21,2,K),
    tools: '<g transform="rotate(45 16 16)">' + box(14.5,10.5,3,19) + box(8.5,3.5,15,8,K) + '</g>',
    sheet: path('M5.5 3.5h17v25h-17z', W) + path('M9 9.5h10M9 13.5h10M9 17.5h10M9 21.5h6') +
           '<g transform="rotate(35 24 18)">' + box(22,8,4,16) + path('M22 24l2 5 2-5z', K) + '</g>',

    /* ---------- subjects ---------- */
    math: box(7.5,3.5,17,25) + box(10.5,6.5,11,5,D) + box(10,14,3,3,K,' stroke="none"') + box(15,14,3,3,K,' stroke="none"') +
          box(20,14,3,3,K,' stroke="none"') + box(10,19,3,3,K,' stroke="none"') + box(15,19,3,3,K,' stroke="none"') +
          box(20,19,3,3,K,' stroke="none"') + box(10,24,3,3,K,' stroke="none"') + box(15,24,3,3,K,' stroke="none"') +
          box(20,24,3,3,K,' stroke="none"'),
    lang: '<rect x="4.5" y="3.5" width="23" height="25" rx="2" fill="#fff"/>' +
          '<path d="M9 24L16 6l7 18M11.5 18h9" fill="none" stroke-width="2"/>',
    sci: path('M12.5 3.5h7v8l7 14q1 3-2 3h-17q-3 0-2-3l7-14z', W) + path('M10.5 19.5h11l4.5 8q-1 1-2 1h-16q-1 0-2-1z', D) +
         path('M12.5 3.5h7v8l7 14q1 3-2 3h-17q-3 0-2-3l7-14z') + circ(15,15,1.5) + circ(19,11,1.2),
    soc: circ(16,13,9.5) + '<ellipse cx="16" cy="13" rx="4" ry="9.5" fill="none"/>' + path('M6.5 13.5h19M8 8.5h16M8 18.5h16') +
         path('M7 22.5q9 8 18 0M16 22.5v4M9.5 28.5h13'),
    art: '<ellipse cx="16" cy="17" rx="13" ry="10.5" fill="#fff"/>' + circ(21,22,2.5) + circ(9,15,2,K) + circ(13,9.5,2,K) +
         circ(20,9.5,2,K) + circ(25,15,2,K),
    code: box(3.5,4.5,25,17) + box(6.5,7.5,19,11,D) + path('M12 10l-3 3.5 3 3.5M20 10l3 3.5-3 3.5','none') +
          path('M12.5 21.5v4h7v-4M9.5 27.5h13'),
    fl: '<rect x="3.5" y="4.5" width="17" height="12" rx="2" fill="#fff"/>' + path('M7.5 16.5v4l4-4','#fff') +
        '<rect x="11.5" y="14.5" width="17" height="12" rx="2" fill="url(#dither)"/>' + path('M24.5 26.5v4l-4-4','#fff') +
        '<rect x="11.5" y="14.5" width="17" height="12" rx="2" fill="none"/>',
    games: '<rect x="2.5" y="9.5" width="27" height="15" rx="7" fill="#fff"/>' + box(7,14,6,2,K,' stroke="none"') +
           box(9,12,2,6,K,' stroke="none"') + circ(21,15,1.8,K) + circ(25,19,1.8,K),
    gen: path('M3.5 7.5q6-2 12 1v19q-6-3-12-1z', W) + path('M28.5 7.5q-6-2-12 1v19q6-3 12-1z', W) +
         path('M6.5 12.5q3-1 6 .5M6.5 16.5q3-1 6 .5M25.5 12.5q-3-1-6 .5M25.5 16.5q-3-1-6 .5')
  };

  var DEFS = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<pattern id="dither" width="2" height="2" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="#fff"/>' +
    '<rect width="1" height="1" fill="#000"/><rect x="1" y="1" width="1" height="1" fill="#000"/></pattern></defs></svg>';

  window.ICONS = ICONS;
  window.installIconDefs = function(){
    if (!document.getElementById('iconDefsHost')) {
      var h = document.createElement('div'); h.id = 'iconDefsHost'; h.innerHTML = DEFS; document.body.appendChild(h);
    }
  };
  window.icon = function(name, size){
    size = size || 64;
    return '<svg class="ico" viewBox="0 0 32 32" width="'+size+'" height="'+size+'" shape-rendering="crispEdges" ' +
      'stroke="#000" stroke-width="1" stroke-linejoin="miter" stroke-linecap="butt">' + (ICONS[name] || ICONS.doc) + '</svg>';
  };
})();
