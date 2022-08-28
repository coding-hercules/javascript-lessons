const firstText = document.createElement('p');
    firstText.textContent = "Hey I'm red!";
    firstText.style.color = 'red';
    container.appendChild(firstText);

const secondText = document.createElement('h3');
    secondText.textContent = 'I\'m a blue h3!';
    secondText.style.color = 'blue';
    container.appendChild(secondText);

const thirdStyle = document.createElement('div');
    thirdStyle.setAttribute('style', 'background-color: pink; border: 1px solid black');
    thirdStyle.setAttribute('id', 'container2');
    container.appendChild(thirdStyle); 

const fourthStyle = document.createElement('h1');
    fourthStyle.textContent = "I'm in a div";
    thirdStyle.appendChild(fourthStyle);

const fifthStyle = document.createElement('p');
    fifthStyle.textContent = 'ME TOO!';
    thirdStyle.appendChild(fifthStyle);

/* container.appendChild(thirdStyle); */


