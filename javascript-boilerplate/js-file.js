// Fundamentals Part 5 - Objects

const container = document.querySelector('#container');

// div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// p
const para = document.createElement('p');
para.classList.add('paragraph');
para.textContent = `Hey I'm red!`;
para.style.color = 'red';

// nested div
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

// appends
container.appendChild(content);
container.appendChild(para);
container.appendChild(blackPink);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// button listener/onclick
const btn = document.querySelector('#btn');
//btn.onclick = alertFunction;
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
//btn.onclick = () => alert("Hello World!");

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
