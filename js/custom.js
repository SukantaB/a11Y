let count = 1;

(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

document.querySelectorAll("#nav li").forEach(function(navEl) {
  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };
});

function myFunction() {
  document.getElementById("menu-dropdown").className = 'menu-dropdown-show'
  document.getElementById("menu-btn").setAttribute('aria-expanded', true)
}

window.onclick = function(event) {
  if (!event.target.matches('#menu-btn')) {
    document.getElementById("menu-dropdown").className = 'displayNone'
    document.getElementById("menu-btn").setAttribute('aria-expanded', false)
  }
}


setInterval(()=>{
  const element = document.getElementById('announcement');
  element.innerText = `OMG, something happened times ${count}`
  count = count + 1
},60000)

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}
