const subMenuPolo = document.querySelector('.submenu-polo')
const menuNome = document.querySelector('.menu-polo');

const subShow = () => {
    subMenuPolo.style.visibility = 'visible';
}

const subHidden = () => {
    subMenuPolo.style.visibility = 'hidden';
}


// menuNome.addEventListener('mouseenter', subShow);
// menuNome.addEventListener('mouseleave', () =>{
//     setTimeout(subHidden, 2000);
// })

menuNome.addEventListener('mouseenter', subShow)
subMenuPolo.addEventListener('mouseleave', subHidden)

