
// ..Показать уведомление ------------------
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// ------------------------------------Поиск карточек--------------------

document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';

        }
    });
});

document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// --------------------------Показать уведомление----------------------------------

document.getElementById('liveToastBtn').addEventListener('click', async function () {
    // Ждем 10 секунд перед тем, как показать тост
    await delay(10000); // Задержка в 10 секунд

    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show(); // Показать тост
});

// --------------------- ---------------------
// let closeInformation = document.getElementById('close_information')
// closeInformation.addEventListener('click', ()=>{
//     document.getElementById('info-glav').remove()
// })

// ===================Кнопка наверх====================
const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('show'); // Показываем кнопку
        } else {
            scrollToTopBtn.classList.remove('show'); // Скрываем кнопку
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавный скролл
        });
    });
    // ---------------- ------------Показать еще/ скрыть------------------------------

let buttonNeverCards = document.querySelector('.never-cards')  // показать еще
let addDopCards = document.querySelector('.tovar_glav_dop')  //скрытые элементы
let removeDopCards = document.getElementById('delit-never-cards')  //скрыть допы
buttonNeverCards.addEventListener('click', function(e){
    e.target.style.display = 'none'
    addDopCards.style.display = 'block'
    removeDopCards.style.display = 'block'
})
removeDopCards.addEventListener('click', function(){
    removeDopCards.style.display = 'none'
    buttonNeverCards.style.display = 'block'
    addDopCards.style.display = 'none'
})


//////////////////
function handleScroll() {
    let gallery = document.getElementById('photoGallery');
    let galleryPosition = gallery.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (galleryPosition < screenHeight - 100) {
        gallery.classList.add('show');
        window.removeEventListener('scroll', handleScroll); // Убираем обработчик после срабатывания
    }
}

window.addEventListener('scroll', handleScroll);

// ---------------------------

const burger = document.getElementById('menuToggle')
 const nav = document.querySelector('.burger_open')
 const closeMenu = document.querySelector('.close_burger')
 const overlay = document.querySelector('.overlay')

 burger.onclick = function(){
    nav.classList.add('add_burger')
    overlay.classList.remove('hidden')
 }

 closeMenu.onclick = function(){
    nav.classList.remove('add_burger')
    overlay.classList.add('hidden')
 }
 overlay.onclick = function(){
    nav.classList.remove('add_burger')
    overlay.classList.add('hidden')
 }

//  ---------------------------------------Вход в аккаунт ----------------

let button_vhod = document.getElementById('buttom_vhod');

button_vhod.addEventListener('click', function(e) {
    e.preventDefault(); // Останавливаем стандартное поведение ссылки
    let container_vhod = document.getElementById('container_whod');
    container_vhod.style.display = 'block'; // Показываем форму
});

// Обработчик отправки формы
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let userName = document.getElementById('user_name').value.trim();
    let email = document.getElementById('exampleInputEmail1').value.trim();

    if (userName && email) {
        // Сохраняем в localStorage
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', email);

        // Отображаем данные
        displayUserInfo();

        // Скрываем форму после сохранения
        document.getElementById('container_whod').style.display = 'none';
    }
});

// Функция отображения информации о пользователе
function displayUserInfo() {
    let saveName = localStorage.getItem('userName');
    let saveEmail = localStorage.getItem('userEmail');

    if (saveName && saveEmail) {
        document.getElementById('userInfo').innerHTML = `
            <p>Здравствуйте: <strong>${saveName}</strong></p>
            <p>Ваш email: <strong>${saveEmail}</strong></p>
        `;
        document.getElementById('buttom_vhod').style.display = 'none'
    }
}

// Очистка данных
document.getElementById('clearData').addEventListener('click', function() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');

    document.getElementById('userInfo').innerHTML = ''; // Убираем отображение
    document.getElementById('buttom_vhod').style.display = 'block'
});

// Отображение данных при загрузке страницы
window.onload = displayUserInfo;