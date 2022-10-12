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

let project = [
  {
    name: "Tonic",
    li1: "Canopy",
    li2: "Back End dev",
    li3: "2015",
    project_img: `images/Snapshoot Portfolio.png`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: "Html",
    li5: "Css",
    li6: "Javascript",
    live_button: `See live`,
    online_button: `See source`
  },
  {
    name: "Tonic",
    li1: "Canopy",
    li2: "Back End dev",
    li3: "2015",
    project_img: `images/Snapshoot Portfolio-2.png`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: "Html",
    li5: "Css",
    li6: "Javascript",
    live_button: `See live`,
    online_button: `See source`
  },
  {
    name: "Tonic",
    li1: "Canopy",
    li2: "Back End dev",
    li3: "2015",
    project_img: `images/Snapshoot Portfolio-3.png`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: "Html",
    li5: "Css",
    li6: "Javascript",
    live_button: `See live`,
    online_button: `See source`
  },
  {
    name: "Tonic",
    li1: "Canopy",
    li2: "Back End dev",
    li3: "2015",
    project_img: `images/Snapshoot Portfolio-4.png`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    li4: "Html",
    li5: "Css",
    li6: "Javascript",
    live_button: `See live`,
    online_button: `See source`
  }
];

let div1 = document.createElement('div');
div1.id = 'modal-con';
document.body.appendChild(div1);

function modalOpen(id) {
  let div2 = document.createElement('div');
  div2.className = "modal-heading";
  div1.appendChild(div2);
  
  let modal_heading = document.createElement('label');
  modal_heading.className = "modal-title";
  modal_heading.textContent = project[0].name;
  div2.appendChild(modal_heading);
  
  let delBtn = document.createElement('button');
  delBtn.id = "close-btn";
  delBtn.innerHTML = '<span>&times;</span>';
  delBtn.addEventListener('click', _ => {
    div1.classList.remove('active-modal')
    div1.innerHTML = ''
  })
  div2.appendChild(delBtn);
  
  let ul = document.createElement('ul');
  ul.className = "lang-con";
  div1.appendChild(ul);
  
  let li1 = document.createElement("li");
  li1.className = "modal-list1";
  li1.textContent = project[id].li1;
  ul.appendChild(li1);
  
  let lio = document.createElement("li");
  lio.className = "modal-list";
  lio.innerHTML = `<span class="modal-dot">.</span>`;
  ul.appendChild(lio);
  
  let li2 = document.createElement("li");
  li2.className = "modal-list";
  li2.textContent = project[0].li2;
  ul.appendChild(li2);
  
  let lio2 = document.createElement("li");
  lio2.className = "modal-list";
  lio2.innerHTML = `<span class="modal-dot">.</span>`;
  ul.appendChild(lio2);
  
  let li3 = document.createElement("li");
  li3.className = "modal-list";
  li3.textContent = project[0].li3;
  ul.appendChild(li3);
  
  let div3 = document.createElement('div');
  div1.appendChild(div3);
  
  let modalImg = document.createElement('img');
  modalImg.className = "modal-img"
  modalImg.setAttribute(
    'src',
    project[id].project_img
  );
  div3.appendChild(modalImg);
  
  let div4 = document.createElement('div');
  div4.className = "modal-description"
  div3.appendChild(div4);
  
  let pTag = document.createElement('p');
  pTag.className = "modal-p";
  pTag.textContent = project[0].description;
  div4.appendChild(pTag);
  
  let div5 = document.createElement('div');
  div5.className = "live-con";
  div4.appendChild(div5);
  
  let div6 = document.createElement('div');
  div6.className = "all-lang-con";
  div5.appendChild(div6);
  
  let p1 = document.createElement("p");
  p1.className = "lang-list";
  p1.textContent = project[id].li4;
  div6.appendChild(p1);
  
  let p2 = document.createElement("p");
  p2.className = "lang-list";
  p2.textContent = project[0].li5;
  div6.appendChild(p2);
  
  let p3 = document.createElement("p");
  p3.className = "lang-list";
  p3.textContent = project[0].li6;
  div6.appendChild(p3);
  
  let div7 = document.createElement('div');
  div7.className = "button-con";
  div5.appendChild(div7)
  
  let onlineBtn = document.createElement('button');
  onlineBtn.className = "project-btn";
  onlineBtn.textContent = project[0].live_button;
  div7.appendChild(onlineBtn);
  
  let liveBtn = document.createElement('button');
  liveBtn.className = "project-btn";
  liveBtn.textContent = project[0].online_button;
  div7.appendChild(liveBtn);
  
  
}
const openModal = document.getElementById('cta');
const mainModal = document.getElementById('modal-con');

openModal.addEventListener('click', function(){
  modalOpen(0)
  mainModal.classList.add('active-modal')
});

const openSecModal = document.getElementById('cta2');
const mainModal2 = document.getElementById('modal-con')

openSecModal.addEventListener('click', function(){
  modalOpen(1)
  mainModal.classList.add('active-modal')
});
