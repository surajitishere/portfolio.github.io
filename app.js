const projectText = document.querySelectorAll('.project-text');
const projectContainer = document.querySelector('.porject-container')
const projectItem = document.querySelectorAll('.project-item');
const projectImg = document.querySelectorAll('.project-img')
const exploreBtn = document.querySelector('.explore-btn')
const exploreStyle = document.querySelector('.explore-style');
const spaceShuttle = document.querySelector('.fa-space-shuttle');
const links = document.querySelectorAll('li');
const backToTop = document.querySelector('.back-to-top');
const dropdown = document.querySelectorAll('.fa-chevron-circle-down');
const bar = document.querySelectorAll('.bar')

//nav links

links.forEach(link=>{
    link.addEventListener('click', navLinks);
})

function navLinks(link){
    if(link.target.classList.contains('about-link')){
        window.scrollTo(0,780);
    }
    else if(link.target.classList.contains('skill-link')){
        window.scrollTo(0,1800);
    }
    else if(link.target.classList.contains('project-link')){
        window.scrollTo(0,2900);
    }
}

//back to top btn

window.onscroll = function(){
    if (document.body.scrollTop > 780 || document.documentElement.scrollTop > 780) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener('click',()=>{
    window.scrollTo(0,0);
})

// explore btn
exploreBtn.addEventListener('click', exploreEvent);

function exploreEvent(){
    exploreStyle.classList.add('explore-style-apply');
    spaceShuttle.style.left = '300px';
    setTimeout(() => {
        exploreStyle.classList.remove('explore-style-apply');
        spaceShuttle.style.left = '10%';
    }, 2000);
}

//dropdown

dropdown.forEach(item=>{
    item.addEventListener('click', parentHeight);
})

function parentHeight(e){
    e.currentTarget.parentElement.classList.toggle('drop-height');
    e.currentTarget.parentElement.classList.toggle('scroll');
    e.currentTarget.nextElementSibling.classList.toggle('detail-visible');
}
// projects

projectItem.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.classList.add('project-text-visible');
        item.classList.add('project-img-blur');
    })
})
projectItem.forEach((item)=>{
    item.addEventListener('mouseout',()=>{
        item.classList.remove('project-text-visible');
        item.classList.remove('project-img-blur')
    })
})
