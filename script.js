window.onload = function()
{
    init_mouse_cursor();

    const navmenu_toggle = document.querySelector('.navmobile');

    navmenu_toggle.addEventListener('click', function(e){
        animate_toggle();
    });
}

function init_mouse_cursor()
{
    options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "circle-move",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
      }
      magicMouse(options);
}

function animate_toggle() {

    const navmobile = document.querySelector('.navmobile');
    const navmobile__menu = document.querySelector('.navmobile__menu');
    const navmenu_spans = document.querySelectorAll('.navmobile span');

    if ( navmobile.classList.contains('toggled') ) {
        navmenu_spans[0].classList.add('rotation__down');
        navmenu_spans[1].classList.add('fade__out');
        navmenu_spans[2].classList.add('rotation__up');
        navmobile__menu.classList.add('navmobile_menu_appear')
        navmobile__menu.classList.remove('navmobile__hide')
        navmobile.classList.remove('toggled');
    } else {
        navmenu_spans[0].classList.remove('rotation__down');
        navmenu_spans[1].classList.remove('fade__out');
        navmenu_spans[2].classList.remove('rotation__up');
        navmobile__menu.classList.remove('navmobile_menu_appear')
        navmobile__menu.classList.add('navmobile__hide')
        navmobile.classList.add('toggled');
    }

}