//array of answers
const answers =[  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
'The future is uncertain.', 'I would rather not say.', 'Who cares?',
'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
//create elements
    const CreatedElements = {
    ballCover: document.createElement('div'),
    spanAnswer: document.createElement('span'),
    butn: document.createElement('button')
    }

    let i = document.querySelector('.culC');
    let a = document.querySelector('audio')
//appending
    document.body.appendChild(CreatedElements.ballCover);
    CreatedElements.ballCover.appendChild(CreatedElements.spanAnswer);
    CreatedElements.ballCover.appendChild(CreatedElements.butn);
//HTML text content
    CreatedElements.spanAnswer.textContent = "Shake ballі";
    CreatedElements.butn.textContent = "Shake";
//Function
const answer = () =>{
    a.play();
    CreatedElements.ballCover.classList.add('is-hidden')
    i.classList.toggle('is-none');
    let answerText = answers[Math.floor(Math.random()* answers.length)];
    CreatedElements.spanAnswer.textContent = answerText;
}

    CreatedElements.butn.addEventListener('click', answer);