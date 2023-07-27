'use strict';
// Main Variables
const outputText = document.querySelector('.result');

// Buttons
const userConfirm = document.querySelector('.userConfirm');
const closeUpdateWindow = document.querySelector('.close-update');
const copyButton = document.querySelector('.copy');
const options = document.querySelector('.generateOptions');

// Divs/Areas
const updateWindow = document.querySelector('.modal-dialog');
const output = document.querySelector('.main-out');
const alert = document.querySelector('.alert');

let result;

// Event Listeners
userConfirm.addEventListener('click', function() {
  output.classList.remove('hidden');
  const userChoice = document.querySelector('.generateOptions').value;
  const userInput = document.querySelector('.userInput').value;
  if(userChoice === `paragraphGeneration`) {
    result = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa beatae, eligendi blanditiis in quae officiis? Placeat perferendis suscipit qui, minima eligendi repellendus quasi quibusdam nam vitae beatae, sed nemo.`.repeat(userInput);
    outputText.textContent = result;
  }
  if(userChoice === `sentenceGeneration`) {
    result = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`.repeat(userInput);
    outputText.textContent = result;
  }
  if(userChoice === `wordGeneration`) {
    const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
    const wordGeneration = words[Math.trunc(Math.random() * words.length)];
    result = `${wordGeneration} `.repeat(userInput);
    outputText.textContent = result;
  }
})


copyButton.addEventListener('click', function () {
  alertBox();
})

closeUpdateWindow.addEventListener('click', () => {updateWindow.classList.add('close-modal'), setTimeout(() => {document.querySelector('.modal-sheet').classList.remove('d-block')}, 200)});

// Functions

function alertBox() {
  navigator.clipboard.writeText(result);
  alert.classList.remove('hidden');
  copyButton.src = `Assets/copying-min.png`;
  setTimeout(() => {
    alert.classList.add('hidden');
    copyButton.src = `Assets/copy-min.png`;
  }, 5000);
}

/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/