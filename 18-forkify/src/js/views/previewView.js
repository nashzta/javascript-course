import icons from '../../img/icons.svg';
import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
      <li class="preview">
        <a class="preview__link  ${
          this._data.recipeId == id ? 'preview__link--active' : ''
        }" href="#${this._data.recipeId}">
          <figure class="preview__fig">
            <img src="${this._data.imageUrl}" alt="${this._data.title}" />
          </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
          </div>
          <div class="preview__user-generated ${
            this._data.key ? '' : 'hidden'
          }">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </a>
      </li>
  `;
  }
}

export default new PreviewView();
