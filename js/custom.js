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

function myFunction() {
  document.getElementById("menu-dropdown").className = 'menu-dropdown-show'
  document.getElementById("menu-btn").setAttribute('aria-expanded', true)
}

window.onclick = function(event) {
  if (!event.target.matches('#menu-btn')) {
    document.getElementById("menu-dropdown").className = 'hidden'
    document.getElementById("menu-btn").setAttribute('aria-expanded', false)
  }
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
