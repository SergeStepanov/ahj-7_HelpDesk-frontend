export default function createElem() {
  document.body.innerHTML = `<div class="container">
      <button
          type="button"
          class="btn"
          data-text="И вот несколько потрясающих материалов. Это очень увлекательно. Верно?"
          title="Какой-то заголовок"
        >
          Нажмите, чтобы переключить всплывающее окно
      </button>

    </div>`;

  console.log('Test: createElem.js!');
}
