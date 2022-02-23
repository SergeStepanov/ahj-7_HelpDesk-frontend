/* eslint-disable class-methods-use-this */
export default class CreateElement {
  constructor() {
    this.url = 'http://serge-heroku.herokuapp.com/';
  }

  initDOM() {
    document.body.innerHTML = `<div class="container">
          <button type="button" class="btn-add" data-btn-add="js-btn-add">
            Добавить тикет
          </button>
          <ul class="cards" data-cards="js-cards">
          </ul>
        </div>
    `;
  }

  createTicket(data) {
    if (data.length === 0) return;

    const cards = document.querySelector('[data-cards=js-cards]');

    for (const item of data) {
      if (!item.description) item.description = '';
      const card = document.createElement('li');
      card.classList.add('card');
      card.dataset.card = 'jsCard';
      card.dataset.id = item.id;
      card.dataset.status = item.status;
      card.innerHTML = `<button class="btn__card" data-btn-status="js-btn-status" data-status=${item.status}>&#160</button>
      <div class="card__content">
        <div class="card__header">
          <h4 class="card__name">${item.name}</h4>
          <span class="card__created">${item.created}</span>
        </div>
        <p class="card__description">${item.description}</p>
      </div>
      <button class="btn__card" data-btn-edit="js-btn-edit">&#9998</button>
      <button class="btn__card" data-btn-delete="js-btn-delete">&#10008</button>
    `;

      cards.appendChild(card);
    }
  }

  // Добавить тикет, Изменить тикет
  createPopapForm(formTitle) {
    const box = document.createElement('div');
    box.classList.add('popup');
    box.innerHTML = `<form class="form" id="form">
        <h4 class="form__title">${formTitle}</h4>

        <label for="">Краткое описание:</label>
        <input class="form__name" type="text" name="name" id="name" required>

        <label for="description">Подробное описание:</label>
        <textarea class="form__description" type="text" name="description" id="description"></textarea>

        <div class="form__btn">
          <button class="btn__false">Отмена</button>
          <button class="btn__true">Ок</button>
        </div>
      </form>
    `;

    document.body.appendChild(box);
  }

  createPopapDelete() {
    const box = document.createElement('div');
    box.classList.add('popup');
    box.innerHTML = `<form class="form" id="form">
        <h4 class="form__title">Удалить тикет</h4>
        <p>Вы уверены, что хотите удалить тикет? Это действие необратимо.</p>

        <div class="form__btn">
          <button class="btn__false">Отмена</button>
          <button class="btn__true">Ок</button>
        </div>
      </form>
    `;
  }
}
