const animItems = document.querySelectorAll('.anim-items');
const burger = document.getElementById('burger');
const body = document.getElementById('body');


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-stop')) {
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop , left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300)
}

document.querySelector('#burger').addEventListener('change', function(e) {
        document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
    });
   
function openMenu() {
    body.classList.add('no-scroll');
}
    
function closeMenu() {
    body.classList.remove('no-scroll');
    document.body.style.overflow = '';
    burger.checked = 0;
}
    
