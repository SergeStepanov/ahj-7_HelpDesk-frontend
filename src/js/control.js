import http from './http';
import CreateElement from './createElement';

export default function control() {
  const page = new CreateElement();
  page.initDOM();

  const responseServerAllTickets = http(
    'GET',
    'http://serge-heroku.herokuapp.com/?method=allTickets',
  );

  responseServerAllTickets
    .then((data) => {
      // console.log(data);
      page.createTicket(JSON.parse(data));
    })
    .catch((err) => err.message);

  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('btn__false')) {
      // console.log(evt.target);
      evt.target.closest('.popup').remove();
    }

    if (evt.target.classList.contains('btn-add')) {
      // console.log(evt.target);
      page.createPopapForm('Добавить тикет');
    }
  });
}
