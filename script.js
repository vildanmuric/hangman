const rijeci = ['madagaskar','silueta', 'pingvin', 'trgovac', 'nepotrebno', 'upornost', 'adaptacija', 'spremnost', 'zatucanost', 'ljubav', 'nezreo', 'zanimljivost', 'ispadanje'];
const rijec = rijeci[(Math.floor(Math.random()*rijeci.length))];
const maxMistakes = 5;
var mistakes = 1;
var correctAnswers = 0;


function main(){
    displayTextFields();
    allTextFields = document.querySelector('#text-fields').querySelectorAll('p');
    document.getElementById('input').addEventListener('keydown', function(e){
        if (e.key==="Enter"){
            checkLetters();
        }
    })
}

function displayTextFields(){
    for (let i = 0; i < rijec.length; i++){
        const para = document.createElement('p');
        const textField = document.createTextNode('__');
        para.appendChild(textField);
        para.setAttribute('id', i);
        para.setAttribute('data-letter', rijec[i]);
        para.style.display = 'inline-block';
        para.style.marginLeft = '1em';
        document.getElementById('text-fields').appendChild(para);
    }
}

function checkLetters(){
    let letterFound = false;
    let inputLetter = document.getElementById('input').value;
    allTextFields.forEach(textField=>{
        if (textField.getAttribute('data-letter') === inputLetter){
            textField.innerHTML = inputLetter;
            letterFound = true;
            correctAnswers+=1;
        }
    });
        if (!letterFound) {
            mistakes +=1;
            gameStateHtml = `<div class="row">
                                <div class="col-1"><img src="${mistakes}.png" alt=""></div>
                            </div>`
            document.getElementById('game-state-handler').innerHTML = gameStateHtml;
        }
        if (mistakes==maxMistakes){
            gameStateHtml = `<div class="row">
                                <div class="col-1"><img src="${mistakes}.png" alt=""></div>
                                <div class="col-1 offset-3"><img src="game-over.png" alt=""></div>
                            </div>`;
            document.getElementById('game-state-handler').innerHTML = gameStateHtml;
            document.getElementById('button').disabled = true;
            document.getElementById('input').disabled = true;
        }
        if (correctAnswers==rijec.length){
            gameStateHtml = `<div class="row">
                                <div class="col-1"><img src="happy-man.png" alt=""></div>
                                <div class="col-1 offset-3"><img src="win.png" alt=""></div>
                            </div>`;
            document.getElementById('game-state-handler').innerHTML = gameStateHtml;
            document.getElementById('button').disabled = true;
            document.getElementById('input').disabled = true;
        }
}


