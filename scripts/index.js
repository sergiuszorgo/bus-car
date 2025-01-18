const animItems = document.querySelectorAll('.anim-items');
const burger = document.getElementById('burger');
const body = document.querySelector('body');
const confirm = document.getElementById('confirm');
const TOKEN = '7590917922:AAFlil6IUzgYCMd4lEzdb79nI8GdWLQpSIk';
const CHAT_ID = '-1002482309359';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


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

// TG 
    
function sendForm(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${this.nameinput.value}\n`;
    message += `<b>Номер телефона:</b> ${this.telinput.value}\n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.nameinput.value = '';
        this.telinput.value = '';
        confirmSend();
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        
    })
}

const tgss = document.querySelectorAll('.tgs')
tgss.forEach(elem => {elem.addEventListener('submit', sendForm)})

//CONFIRM

function confirmSend() {
    body.classList.add('no-scroll')
    confirm.style.display = 'block';
}

function unConfirmSend() {
    body.classList.remove('no-scroll')
    confirm.style.display = 'none';
}

// TRANSLATE

const lang = document.querySelector('.lang_select');

function translateMenu() {
    lang.classList.toggle('active');
}

// TRANSLATEMOBILE

const langMob = document.querySelector('.langmob_select');

function translateMenuMob() {
    langMob.classList.toggle('active');
}