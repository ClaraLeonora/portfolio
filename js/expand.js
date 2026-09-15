// Shared click-to-expand preview card.
// Call window.openExpandCard(sourceEl, item) where item = {
//   date, title, desc,
//   label: small caps heading over desc, e.g. 'Abstract' (optional). When set,
//          no image/icon should be passed, so the text fills the whole card
//   image: path to a screenshot/document (optional), becomes a click-to-view-full-size link
//   icon/color: SVG string + CSS background used when there's no image (optional)
//   links: [{label, href}, ...] (optional)
// }
//
// Accessibility: the dialog traps Tab focus while open, moves focus to its
// close button on open, and returns focus to the element that triggered it
// on close (see trapFocus / openExpandCard / closeExpandCard).
(function(){
  var overlay, backdrop, card, closeBtn, visual, dateEl, titleEl, labelEl, descEl, linksEl, activeEl;
  var EASE = 'cubic-bezier(.2,.8,.2,1)';
  var TITLE_ID = 'xcard-title';

  function build(){
    if(overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'xoverlay';
    overlay.innerHTML =
      '<div class="xbackdrop"></div>' +
      '<div class="xcard" role="dialog" aria-modal="true" aria-labelledby="'+TITLE_ID+'">' +
        '<button type="button" class="xclose" aria-label="Close">&times;</button>' +
        '<div class="xvisual"></div>' +
        '<div class="xbody">' +
          '<div class="xdate"></div>' +
          '<h2 id="'+TITLE_ID+'"></h2>' +
          '<div class="xlinks"></div>' +
          '<div class="xlabel"></div>' +
          '<p></p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    backdrop = overlay.querySelector('.xbackdrop');
    card = overlay.querySelector('.xcard');
    closeBtn = overlay.querySelector('.xclose');
    visual = overlay.querySelector('.xvisual');
    dateEl = overlay.querySelector('.xdate');
    titleEl = overlay.querySelector('.xbody h2');
    labelEl = overlay.querySelector('.xlabel');
    descEl = overlay.querySelector('.xbody p');
    linksEl = overlay.querySelector('.xlinks');
    closeBtn.addEventListener('click', closeExpandCard);
    backdrop.addEventListener('click', closeExpandCard);
    document.addEventListener('keydown', function(e){
      if(overlay.style.display !== 'block') return;
      if(e.key === 'Escape'){ closeExpandCard(); return; }
      if(e.key === 'Tab'){ trapFocus(e); }
    });
  }

  function focusableEls(){
    var all = card.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
    return Array.prototype.filter.call(all, function(el){ return el.offsetParent !== null; });
  }

  function trapFocus(e){
    var f = focusableEls();
    if(!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if(e.shiftKey && document.activeElement === first){
      e.preventDefault(); last.focus();
    } else if(!e.shiftKey && document.activeElement === last){
      e.preventDefault(); first.focus();
    }
  }

  function openExpandCard(sourceEl, item){
    build();
    activeEl = sourceEl;
    var r = sourceEl.getBoundingClientRect();
    var hasVisual = !!(item.image || item.icon);

    visual.innerHTML = '';
    visual.style.display = hasVisual ? '' : 'none';
    if(item.image){
      visual.style.background = '';
      var link = document.createElement('a');
      link.href = item.image;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'xvisual-link';
      link.setAttribute('aria-label', (item.title || 'Image') + ': view full size in a new tab');
      var img = document.createElement('img');
      img.src = item.image;
      img.alt = '';
      link.appendChild(img);
      var hint = document.createElement('span');
      hint.className = 'xvisual-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.textContent = 'View full size ↗';
      link.appendChild(hint);
      visual.appendChild(link);
    } else if(item.icon){
      visual.style.background = item.color || 'linear-gradient(135deg, var(--navy), var(--navy-soft))';
      visual.innerHTML = item.icon;
      var svg = visual.querySelector('svg');
      if(svg) svg.setAttribute('aria-hidden', 'true');
    }
    dateEl.textContent = item.date || '';
    titleEl.textContent = item.title || '';
    labelEl.textContent = item.label || '';
    labelEl.style.display = item.label ? '' : 'none';
    descEl.textContent = item.desc || '';
    var links = item.links || [];
    linksEl.innerHTML = links.map(function(l){
      return '<a class="link" href="'+l.href+'" target="_blank" rel="noopener">'+l.label+' ↗<span class="sr-only"> (opens in a new tab)</span></a>';
    }).join('');

    overlay.style.display = 'block';
    card.style.transition = 'none';
    card.style.left = r.left+'px';
    card.style.top = r.top+'px';
    card.style.width = r.width+'px';
    card.style.height = r.height+'px';
    card.style.borderRadius = '10px';
    backdrop.style.transition = 'none';
    backdrop.style.opacity = 0;
    card.classList.add('collapsed');

    void card.offsetWidth; // force reflow before animating

    requestAnimationFrame(function(){
      card.style.transition = 'left .45s '+EASE+', top .45s '+EASE+', width .45s '+EASE+', height .45s '+EASE+', border-radius .45s ease';
      backdrop.style.transition = 'opacity .3s ease';
      var targetW = Math.min(hasVisual ? 600 : 680, window.innerWidth - 48);
      var targetH = Math.min(hasVisual ? 560 : 620, window.innerHeight - 80);
      card.style.left = ((window.innerWidth-targetW)/2)+'px';
      card.style.top = ((window.innerHeight-targetH)/2)+'px';
      card.style.width = targetW+'px';
      card.style.height = targetH+'px';
      card.style.borderRadius = '20px';
      backdrop.style.opacity = 1;
      card.classList.remove('collapsed');
    });
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeExpandCard(){
    if(!activeEl) return;
    var r = activeEl.getBoundingClientRect();
    var toRefocus = activeEl;
    card.classList.add('collapsed');
    backdrop.style.opacity = 0;
    card.style.left = r.left+'px';
    card.style.top = r.top+'px';
    card.style.width = r.width+'px';
    card.style.height = r.height+'px';
    card.style.borderRadius = '10px';
    document.body.style.overflow = '';
    activeEl = null;
    setTimeout(function(){ if(overlay) overlay.style.display = 'none'; }, 460);
    toRefocus.focus();
  }

  window.openExpandCard = openExpandCard;
})();
