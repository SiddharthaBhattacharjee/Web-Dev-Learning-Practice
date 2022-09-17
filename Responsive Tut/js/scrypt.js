function webopen(url) {
    window.open(url, '_blank');
}

function githubopen(){
    webopen("https://github.com/SiddharthaBhattacharjee");
}
function twitteropen(){
    webopen("https://twitter.com/Siddhartha_2345");
}

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})