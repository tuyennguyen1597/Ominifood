// Set the current year to copyright section
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// Put the event to the nav button
const navButton = document.querySelector('.nav-buttons')
const navOpen = document.querySelector('#header')
navButton.addEventListener('click', function (event) {
  navOpen.classList.toggle('nav-open')
})

//Implement Smooth Scrolling
//Can also use scrollTo to set the specific position
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//Implement Sticky Navigation Bar
const sectionHeroEl = document.querySelector('.section-hero')
//we want to obser the hero section because as long as the nav bar
// reach the bottom edge hero section then the .sticky class 
// will appear
// when the hero section move out the view port, we want the nav is sticky
const obs = new IntersectionObserver(function (entries) {
  console.log(entries)
  if (!entries[0].isIntersecting) {
    document.body.classList.add('sticky')
  } else {
    document.body.classList.remove('sticky')
  }
}, {
  //In the view port
  root: null,
  //when the hero section is observed is outside the view port
  // = 1 when the hero section is observed is completely inside VP
  threshold: 0,
  rootMargin: '-80px'
})
obs.observe(sectionHeroEl)

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
