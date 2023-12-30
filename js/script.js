window.addEventListener("DOMContentLoaded", () =>{
    new WOW().init();

    function tab_open(btn, items){
        btn.addEventListener('click', (e) =>{
            items.classList.toggle('active');
            if(!items.classList.contains('active')){
                btn.querySelector('p').textContent = 'Скрыть';
                btn.querySelector('p').style.paddingRight = '10px';
                btn.querySelector('svg').style = 'transform: rotate(-180deg); right: 70px;';
                if(window.screen.width < 480){
                    btn.querySelector('svg').style = 'transform: rotate(-180deg); right: 55px;';
                }
            } else {
                btn.querySelector('p').textContent = `Показать еще`;
                btn.querySelector('svg').style = '';
            }
        });
    }
    tab_open(document.querySelector(".image__wrapper__button"), document.querySelector(".screen"))

    let itemHead = document.querySelectorAll(".stages__item_head");

    function collapseSection(element, heightArg) {
        var sectionHeight = element.scrollHeight;
        var elementTransition = element.style.transition;
        element.style.transition = '';
        requestAnimationFrame(function () {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            requestAnimationFrame(function () {
                    element.style.height = heightArg;
                });
            });
        element.setAttribute('data-collapsed', 'true');
    }
    function expandSection(element) {
        var sectionHeight = element.scrollHeight;
        element.style.height = sectionHeight + 'px';
        element.setAttribute('data-collapsed', 'false');
    }
    function itemAccordion(elem, heightArg) {
        elem.forEach(item => {
            item.addEventListener("click", (e) => {
                item.querySelector("svg").classList.toggle("activeArrow");
                var isCollapsed = item.parentNode.getAttribute('data-collapsed') === 'true';
                if (isCollapsed) {
                    expandSection(item.parentNode);
                    item.parentNode.setAttribute('data-collapsed', 'false');
                } else {
                    collapseSection(item.parentNode, heightArg);
                }
            });
        });
    }
    if (window.screen.width >= 768) {
        itemAccordion(itemHead, "56px");
    } else if (window.screen.width < 768 && window.screen.width >= 425) {
        itemAccordion(itemHead, "57px");
    } else if(window.screen.width <= 480){
        itemAccordion(itemHead, "59px");
    }
    
    else {
        itemAccordion(itemHead, "49px");
    }
    
});