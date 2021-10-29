import '../sass/main.scss'
//array of answers
const answers =[  'Maybe.', 'Certainly not.', 'I hope so.',
'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
'The future is uncertain.', 'Who cares?',
'Possibly.', 'Never, ever, ever.', 'Yes!'];
//create elements
    const CreatedElements = {
    ballCover: document.createElement('div'),
    ballBody: document.createElement('div'),
    butn: document.createElement('button'),
    paragraph: document.createElement('p'),
    ballScreen: document.createElement('div'),
    }
    //
//appending
    document.body.appendChild(CreatedElements.ballCover);
    CreatedElements.butn.classList.add('ball_btn');
    //ball cover placement
    CreatedElements.ballCover.appendChild(CreatedElements.ballBody);
    CreatedElements.ballCover.appendChild(CreatedElements.butn);
    CreatedElements.ballCover.classList.add('ball_div');
    CreatedElements.ballCover.classList.add('shake');
     //ball body
     CreatedElements.ballBody.classList.add('ball');
     CreatedElements.ballBody.appendChild(CreatedElements.ballScreen);
     //ball screen
     CreatedElements.ballScreen.appendChild(CreatedElements.paragraph);
     CreatedElements.ballScreen.classList.add('ball_screen');
    //paragreph
    CreatedElements.paragraph.classList.add('p_text');
    CreatedElements.paragraph.classList.add('screen');
//HTML text content
    CreatedElements.paragraph.textContent = "SHAKE BALL";
//Function
export const answer = () =>{
    let answerText = answers[Math.floor(Math.random()* answers.length)];
    CreatedElements.paragraph.textContent = answerText;
    CreatedElements.paragraph.classList.toggle('screen1')
    CreatedElements.ballCover.classList.toggle('shake1');
}

    CreatedElements.butn.addEventListener('click', answer);