// DOM Manipulation

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.classList.add('paragraph');
para.textContent = `Hey I'm red!`;
para.style.color = 'red';

const blackPink = document.createElement('div');
blackPink.classList.add('double-div');
blackPink.style.backgroundColor = 'pink';
blackPink.style.border = '2px solid black';
const blackPinkH1 = document.createElement('h1');
blackPinkH1.classList.add('double-div-h1');
blackPinkH1.textContent = `I'm in a div`;
const blackPinkp = document.createElement('p');
blackPinkp.classList.add('double-div-p');
blackPinkp.textContent = `ME TOO!`;
blackPink.appendChild(blackPinkH1);
blackPink.appendChild(blackPinkp);

container.appendChild(content);
container.appendChild(para);
container.appendChild(blackPink);