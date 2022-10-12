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

const project = [
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    project_img: 'images/Snapshoot Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    project_img: 'images/Snapshoot Portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    project_img: 'images/Snapshoot Portfolio-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
  {
    name: 'Tonic',
    li1: 'Canopy',
    li2: 'Back End dev',
    li3: '2015',
    project_img: 'images/Snapshoot Portfolio-4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: 'Html',
    li5: 'Css',
    li6: 'Javascript',
    live_button: 'See live',
    online_button: 'See source',
  },
];

const div1 = document.createElement('div');
div1.id = 'modal-con';
document.body.appendChild(div1);

function modalOpen(id) {
  const div2 = document.createElement('div');
  div2.className = 'modal-heading';
  div1.appendChild(div2);

  const modalheading = document.createElement('label');
  modalheading.className = 'modal-title';
  modalheading.textContent = project[0].name;
  div2.appendChild(modalheading);

  const delBtn = document.createElement('button');
  delBtn.id = 'close-btn';
  delBtn.innerHTML = '<span>&times;</span>';
  delBtn.addEventListener('click', () => {
    div1.classList.remove('active-modal');
    div1.innerHTML = '';
  });
  div2.appendChild(delBtn);

  const ul = document.createElement('ul');
  ul.className = 'lang-con';
  div1.appendChild(ul);

  const li1 = document.createElement('li');
  li1.className = 'modal-list1';
  li1.textContent = project[id].li1;
  ul.appendChild(li1);

  const lio = document.createElement('li');
  lio.className = 'modal-list';
  lio.innerHTML = '<span class="modal-dot">.</span>';
  ul.appendChild(lio);

  const li2 = document.createElement('li');
  li2.className = 'modal-list';
  li2.textContent = project[0].li2;
  ul.appendChild(li2);

  const lio2 = document.createElement('li');
  lio2.className = 'modal-list';
  lio2.innerHTML = '<span class="modal-dot">.</span>';
  ul.appendChild(lio2);

  const li3 = document.createElement('li');
  li3.className = 'modal-list';
  li3.textContent = project[0].li3;
  ul.appendChild(li3);

  const div3 = document.createElement('div');
  div3.className = 'whole-con';
  div1.appendChild(div3);

  const divImg = document.createElement('div');
  divImg.className = 'img-div';
  div3.appendChild(divImg);

  const modalImg = document.createElement('img');
  modalImg.className = 'modal-img';
  modalImg.setAttribute(
    'src',
    project[id].project_img,
  );
  divImg.appendChild(modalImg);

  const div4 = document.createElement('div');
  div4.className = 'modal-description';
  div3.appendChild(div4);

  const pTag = document.createElement('p');
  pTag.className = 'modal-p';
  pTag.textContent = project[0].description;
  div4.appendChild(pTag);

  const div5 = document.createElement('div');
  div5.className = 'live-con';
  div4.appendChild(div5);

  const div6 = document.createElement('div');
  div6.className = 'all-lang-con';
  div5.appendChild(div6);

  const p1 = document.createElement('p');
  p1.className = 'lang-list';
  p1.textContent = project[id].li4;
  div6.appendChild(p1);

  const p2 = document.createElement('p');
  p2.className = 'lang-list';
  p2.textContent = project[0].li5;
  div6.appendChild(p2);

  const p3 = document.createElement('p');
  p3.className = 'lang-list';
  p3.textContent = project[0].li6;
  div6.appendChild(p3);

  const div7 = document.createElement('div');
  div7.className = 'button-con';
  div5.appendChild(div7);

  const onlineBtn = document.createElement('button');
  onlineBtn.className = 'modal-btn';
  onlineBtn.innerHTML = 'see Source <img src="images/github-icon.svg" alt="">';
  div7.appendChild(onlineBtn);

  const liveBtn = document.createElement('button');
  liveBtn.className = 'modal-btn';
  liveBtn.innerHTML = 'see live <img src="images/Icon.png" alt="">';
  div7.appendChild(liveBtn);
}
const openModal = document.getElementById('cta');
const mainModal = document.getElementById('modal-con');

openModal.addEventListener('click', () => {
  modalOpen(0);
  mainModal.classList.add('active-modal');
});

const openSecModal = document.getElementById('cta2');

openSecModal.addEventListener('click', () => {
  modalOpen(1);
  mainModal.classList.add('active-modal');
});

const openThirdModal = document.getElementById('cta3');

openThirdModal.addEventListener('click', () => {
  modalOpen(2);
  mainModal.classList.add('active-modal');
});

const openFourthModal = document.getElementById('cta4');

openFourthModal.addEventListener('click', () => {
  modalOpen(3);
  mainModal.classList.add('active-modal');
});
