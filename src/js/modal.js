import {answer as ANS} from './index.js';


const refs = {
    modalBlock: document.querySelector('.modal'),
    closeModal: document.querySelector('.close_ask'),
    sendModal: document.querySelector('.ask_btn')
}

//send question
const ask = () => {
    refs.modalBlock.classList.toggle('is-none');
    ANS();
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