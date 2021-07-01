import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const { speakers } = data;
  // DISPLAY MOBILE MENU
  const openMenuBtn = document.querySelector('header .open-menu i');
  const closeMenuBtn = document.querySelector('header .close-menu-btn i');
  const menuWrap = document.querySelector('header .header-bottom ul');
  openMenuBtn.addEventListener('click', () => menuWrap.classList.add('display-menu'));
  closeMenuBtn.addEventListener('click', () => menuWrap.classList.remove('display-menu'));
  // LOAD SPEAKERS
  const speakersList = document.querySelector('.speakers-list');
  function implementSpeakers() {
    speakers.forEach((speaker) => {
      const speakerItem = `<li class="speaker-item">
              <div class="speaker-img-wrap">
                <i class="far fa-square box"></i>
                <img src="${speaker.img}" alt="speaker-img" class="speaker-img">
              </div>
              <div class="speaker-info">
                  <h3 class="speaker-name">${speaker.name}</h3>
                  <p class="speaker-position">${speaker.position}</p>
                  <div class="speaker-line"></div>
                  <p class="speaker-text">${speaker.text}</p>
              </div>
          </li>`;
      speakersList.innerHTML += speakerItem;
    });
  }
  if (document.querySelector('.speakers-list')) {
    implementSpeakers();
  }
});
