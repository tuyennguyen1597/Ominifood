// Set the current year to copyright section
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// Put the event to the nav button
const navButton = document.querySelector('.nav-buttons')
const navOpen = document.querySelector('#header')
navButton.addEventListener('click', function(event) {
  navOpen.classList.toggle('nav-open')
})

//Implement Smooth Scrolling
//Can also use scrollTo to set the specific position
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function(link) {
  console.log(link.hash)
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionEl = document.querySelector(link.hash)
    console.log(sectionEl)
    sectionEl.scrollIntoView({behavior: 'smooth'})
  })
})

//Implement Sticky Navigation Bar
const sectionHeroEl = document.querySelector('.section-hero')
//we want to obser the hero section because as long as the nav bar
// reach the bottom edge hero section then the .sticky class 
// will appear
// when the hero section move out the view port, we want the nav is sticky
const obs = new IntersectionObserver(function(entries){
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
