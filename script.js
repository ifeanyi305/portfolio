const hambuger = document.querySelector(' .hambuger');
hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
});
const anchor = document.querySelectorAll('.nav-item');
for (let i = 0; i < anchor.length; i += 1) {
  anchor[i].addEventListener('click', () => {
    hambuger.classList.remove('active');
  });
}

/* Javscript code for Popup window */

const potfolioProjects = [
  {
    name: 'Travellers hub',
    li1: 'Microverse',
    li2: 'Fullstack dev',
    li3: '2023',
    project_img: 'images/travellers.png',
    source_icon: 'images/github-icon.svg',
    live_icon: 'images/Icon.png',
    description: "A Fullstack application that allows users to see traveling packages and book based on their preference. rank.",
    li4: 'Rails',
    li5: 'React',
    li6: 'Redux',
    live_demo: 'https://travelers-hub-front.onrender.com/',
    display_project_button: 'See project',
    source_code: 'https://github.com/ifeanyi305/travelers_hub_front-end',
  },
  {
    name: 'Easy Launch',
    li1: 'Microverse',
    li2: 'Web3 blockchain',
    li3: '2023',
    project_img: 'images/easyLaunch.png',
    source_icon: 'images/github-icon.svg',
    live_icon: 'images/Icon.png',
    description: "Easy Launch is a cutting-edge web3 blockchain platform that provides an all-in-one solution for users seeking to launch their own cryptocurrency. With a robust and secure architecture, Easy Launch enables users to create and manage their own digital assets and smart contracts, as well as conduct seamless and secure transactions on the blockchain.",
    li4: 'solidity',
    li5: 'React',
    li6: 'Redux',
    live_demo: 'https://easylaunch.onrender.com/',
    display_project_button: 'See project',
    source_code: 'https://github.com/ifeanyi305/initial_coin_offering',
  },
  {
    name: 'Budget App',
    li1: 'Microverse',
    li2: 'Fullstack dev',
    li3: '2023',
    project_img: 'images/budget.png',
    source_icon: 'images/github-icon.svg',
    live_icon: 'images/Icon.png',
    description: "Budget App is a mobile web application where you can manage your budget: You have a list of expenses associated with a category, so that you can see how much money you spent and on what.",
    li4: 'Rails',
    li5: 'React',
    li6: 'Redux',
    live_demo: 'https://budget-bp9n.onrender.com/',
    display_project_button: 'See project',
    source_code: 'https://github.com/ifeanyi305/Budget-App',
  },
  {
    name: 'Crypto Tradeoff',
    li1: 'Microverse',
    li2: 'Front-end dev',
    li3: '2023',
    project_img: 'images/crypto-tradeoff.png',
    source_icon: 'images/github-icon.svg',
    live_icon: 'images/Icon.png',
    description: "Crypto tradeoff is a crypto exchange website that displays list of crypto currency exchange websites based on their rank.",
    li4: 'css',
    li5: 'React',
    li6: 'Redux',
    live_demo: 'https://crypto-trade-off.netlify.app/',
    display_project_button: 'See project',
    source_code: 'https://github.com/ifeanyi305/crypto-website',
  },
];

const projects = () => {
  const getProjects = document.querySelector('.grid-container');
  const allProjects = document.createElement('div');
  allProjects.className = 'project-container'
  potfolioProjects.forEach((scheme) => {
    allProjects.innerHTML += `
    <div class="project_card">
      <div class="developer"><img class="project_img" src="${scheme.project_img}" alt=""></div>
      <div class="block">
        <div class="project-wrapper span-1">
          <div class="project-review">
            <label>${scheme.name}</label>
          </div>
          <ul class="backend-dev">
            <li class="canopy">${scheme.li1}</li>
            <li class="back-end">${scheme.li2}</li>
            <li class="back-end">${scheme.li3}</li>
          </ul>
          <div class="project_description">
            <p>${scheme.description}</p>
          </div>
          <ul class="programming-lang">
          <li class="lang">${scheme.li4}</li>
          <li class="lang">${scheme.li5}</li>
          <li class="lang">${scheme.li6}</li>
          </ul>
          <div class="project-btn"><button id="cta">${scheme.display_project_button}</button></div>
        </div>
      </div>
    </div>
    `;
  })
  getProjects.appendChild(allProjects);
}

projects();

const closeModal = () => {
  project_container.remove()
}
const project_container = document.createElement('div');
const modalOpen = (id) => {
  project_container.id = 'modal-con';
  close_button = '&times';
  project_container.innerHTML = `
      <div class="modal-heading">
        <p class="modal-title">${potfolioProjects[id].name}</p>
        <button id="close-btn" onClick="closeModal()"><span>${close_button}</span></button>
      </div>
      <ul class="lang-con">
        <li class="modal-list1">${potfolioProjects[id].li1}</li>
        <li class="modal-list">${potfolioProjects[id].li2}</li>
        <li class="modal-list">${potfolioProjects[id].li3}</li>
      </ul>
      <div class="whole-con">
        <div class="img-div">
          <img class="modal-img" alt="potfolioProjects img" src="${potfolioProjects[id].project_img}" />
        </div>
        <div class="modal-description">
          <div class="debug2">
            <p class="modal-p">${potfolioProjects[id].description}</p>
          </div>
          <div class="debug">
            <ul class="all-lang-con">
              <li class="lang-list">${potfolioProjects[id].li4}</li>
              <li class="lang-list">${potfolioProjects[id].li5}</li>
              <li class="lang-list">${potfolioProjects[id].li6}</li>
            </ul>
            <div class="button-con">
              <button class="modal-btn"><a href="${potfolioProjects[id].source_code}">Github</a><img alt="github icon" src="${potfolioProjects[id].source_icon}" /></button>
              <button class="modal-btn"><a href="${potfolioProjects[id].live_demo}">Live demo</a><img alt="github icon" src="${potfolioProjects[id].live_icon}" /></button>
            </div>
          </div>
        </div>
      </div>
    `
  document.body.appendChild(project_container);
}
const modalButtons = document.querySelectorAll('[id^="cta"]');

modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modalOpen(index);
  });
});

/* javascript code for form validation */

function saveInputToLocalStorage(inputElement, key) {
  inputElement.addEventListener('input', () => {
    userInfo[key] = inputElement.value.trim();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  });
}

const mail = document.getElementById('email');
const username = document.getElementById('user-name');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const errorMsg = document.querySelector('.div-span');

form.addEventListener('click', (event) => {
  if (mail.value !== mail.value.toLowerCase()) {
    errorMsg.textContent = 'Email address needs to be in lowercase';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
});

const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {
  username: '',
  email: '',
  textArea: '',
};

mail.value = userInfo.email;
username.value = userInfo.username;
textArea.value = userInfo.textArea;

saveInputToLocalStorage(username, 'username');
saveInputToLocalStorage(mail, 'email');
saveInputToLocalStorage(textArea, 'textArea');
