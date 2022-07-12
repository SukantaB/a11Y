let count = 1;

(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

// document.querySelectorAll("#nav button").forEach(function(navEl) {
//   navEl.onclick = function() {
//     toggleTab(this.id, this.dataset.target);
//   };
// });

setInterval(()=>{
  const element = document.getElementById('announcement');
  element.innerText = `OMG, something happened times ${count}`
  count = count + 1
},60000)

// function myFunction() {
//   document.getElementById("menu-dropdown").className = 'menu-dropdown-show'
//   document.getElementById("menu-btn")
// }

// window.onclick = function(event) {
//   if (!event.target.matches('#menu-btn')) {
//     document.getElementById("menu-dropdown").className = 'hidden'
//     document.getElementById("menu-btn").setAttribute('aria-expanded', false)
//   }
// }

// function onBlurMenu() {
//   document.getElementById("menu-dropdown").className = 'hidden'
//   document.getElementById("menu-btn").setAttribute('aria-expanded', false)
// }


function closeAllMenu(){
  const elems = document.querySelectorAll('.menu-dropdown-wrapper')
  elems.forEach(e =>{
    const dropdown = e.querySelector('.menu-dropdown')
    const button = e.querySelector('.menu-btn')
    dropdown.className = 'hidden menu-dropdown'
    button.setAttribute('aria-expanded', false)
  })
}

window.addEventListener('load', () => {
  const elems = document.querySelectorAll('.menu-dropdown-wrapper')
  elems.forEach(e =>{
    loadMenu(e)
  })
})

function loadMenu(elem) {
  const dropdown = elem.querySelector('.menu-dropdown')
  const button = elem.querySelector('.menu-btn')
  loadMenuItem(dropdown)
  button.onclick = () => {
    dropdown.className = 'menu-dropdown-show menu-dropdown'
    button.setAttribute('aria-expanded', true)
  }

  elem.addEventListener('keydown', (event) => {
    const key = event.key
    switch(key){
      case 'Esc':
      case 'Escape': {
        closeAllMenu();
        break;
      }
    }
  })

  window.addEventListener('pointerdown', closeAllMenu)
}

function loadMenuItem(dropdown){
  const menuItems = dropdown.querySelectorAll('a')
  menuItems.forEach(e => {
    e.addEventListener('focusout', e => {
      if(!e.relatedTarget.className.includes('drop-down-menu-item')){
        closeAllMenu()
      }
    })
  })
}

function toggleTab(selectedNav, targetId) {
  console.log(selectedNav,targetId )
  var navEls = document.querySelectorAll("#nav button");
  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
      navEl.setAttribute('aria-selected', true)
      navEl.setAttribute('tabindex', 0)
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
        navEl.setAttribute('aria-selected', false)
        navEl.setAttribute('tabindex', -1)
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
      tab.setAttribute('hidden', false)
    } else {
      tab.style.display = "none";
      tab.setAttribute('hidden', true)
    }
  });
}
