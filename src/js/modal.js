import '../sass/main.scss';
import {ANSWER} from './answer';
const refs = {
    modalBlock: document.querySelector('.modal'),
    closeModal: document.querySelector('.close_ask'),
    sendModal: document.querySelector('.ask_btn'),
}

//send question
const ask = () => {
    refs.modalBlock.classList.toggle('is-none');
    ANSWER();
}
//just close modal
const closeAsker = () =>{
    refs.modalBlock.classList.toggle('is-none')
}



//listeners
refs.closeModal.addEventListener('click', () =>
{
    closeAsker();
});

refs.sendModal.addEventListener('click', () =>{
    ask();
})