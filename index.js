 /* function openModal(){
  if(document.getElementById('open_modal')){
    document.getElementById('modal').classList.toggle('modal');
    document.querySelector('body').classList.toggle('block');
    document.getElementById('open_modal').classList.toggle('block');

  }else{
    document.getElementById('open_modal')..classList.toggle('none');
  }
}  */

// Отримаю модальне вікно і кнопки
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open_modal');

const closeBtn = document.getElementById('closeModalBtn');

// Функція відкриття модального вікна
function openModal() {
  modal.style.display = 'block';
} 

// Функція закривання модального вікна
function closeModal() {
  modal.style.display = 'none';
}

// Слухачі подій для відкриття та закриття модального вікна
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


// Закриття модального вікна, якщо користувач клацне поза ним
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});