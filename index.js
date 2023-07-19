// Main Variables
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis. Commodo quis imperdiet massa tincidunt. Feugiat sed lectus vestibulum mattis ullamcorper. Neque viverra justo nec ultrices dui sapien eget mi. Dui faucibus in ornare quam viverra. Euismod in pellentesque massa placerat duis ultricies lacus. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Magna ac placerat vestibulum lectus mauris ultrices eros in. Non nisi est sit amet facilisis magna etiam tempor orci. Ornare aenean euismod elementum nisi. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. At tellus at urna condimentum.`;
const output = document.querySelector('.output');
const creditLogo = document.querySelector('.-logo');

// Buttons
const menu = document.querySelector('.menu');
const userConfirmation = document.querySelector('.user-confirm');
const settingsBtn = document.querySelector('.settings-btn');
const lightDarkBtn = document.querySelector('.light-dark');
const exitBtn = document.querySelectorAll('.exit-button');
const copyBtn = document.querySelector('.copy');

// Divs and areas
const generateArea = document.querySelector('.generate-area');
const dropDown = document.querySelector('.drop-main');
const settingsMenu = document.querySelector('.settings-main');
const copiedDiv = document.querySelector('.copy-main');
Array.from(document.querySelector('.dropdown'));

// Events

userConfirmation.addEventListener('click', function() {
  const userInput = document.querySelector('.user-in').value;
  const result = lorem.repeat(userInput);
  output.textContent = `${result}`;
  creditLogo.classList.remove('hidden');
  copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(result); // copies the Lorem result too users clipboard.
    copiedDiv.classList.remove('hidden');
    copyBtn.src = `Assets/copying.png`;
    setTimeout(() => {
      copyBtn.src = `Assets/copy.png`;
      copiedDiv.classList.add('hidden');
    }, 5000)
  })
})

menu.addEventListener('click', function() {
  closeAll();
  openMenu();
  settings();
  exitButton();
})

// Functions

function openMain() {
  closeAll();
  generateArea.classList.remove('hidden');
}

function closeAll() {
  generateArea.classList.add('hidden');
  dropDown.classList.add('hidden');
  settingsMenu.classList.add('hidden');
}

function openMenu() {
  dropDown.classList.remove('hidden');
}

function settings() {
  settingsBtn.addEventListener('click', function() {
    closeAll();
    settingsMenu.classList.remove('hidden');
    lightDark();
  });
}

function styleSwitch(style, color) {
  lightDarkBtn.textContent = `${style}`;
  document.querySelector(':root').style.backgroundColor = `${color}`;
}

function lightDark() {
  lightDarkBtn.addEventListener('click', function() {
    const x = lightDarkBtn.textContent;
    if(x.includes('Light Mode.')) {
      styleSwitch(`Dark Mode.`, `#474E68`);
      lightDarkBtn.style.backgroundColor = '#181617';
    } else {
      styleSwitch(`Light Mode.`, `#181617`);
      lightDarkBtn.style.backgroundColor = '#474E68';
    }
  })
}

function exitButton() {
  Array.from(exitBtn);
  for(const btn of exitBtn) {
    btn.addEventListener('click', function() {
      openMain();
    })
  }
}

/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/