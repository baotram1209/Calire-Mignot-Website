const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute('aria-expanded', false);
  }
}) 


// Sub-menu


const btns = document.querySelectorAll('.btn');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActive();
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

const removeActive = () => {
    btns.forEach(btn => btn.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {
    if (!e.target.matches('.btn')) {
        removeActive()
    }
}

