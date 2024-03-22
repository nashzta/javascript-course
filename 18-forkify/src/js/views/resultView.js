import icons from '../../img/icons.svg';
import View from './View.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(rec => this._generateMarkupPreview(rec)).join('');
  }

  _generateMarkupPreview(recipe) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${recipe.recipeId}">
          <figure class="preview__fig">
            <img src="${recipe.imageUrl}" alt="${recipe.title}" />
          </figure>
            <div class="preview__data">
              <h4 class="preview__title">${recipe.title}</h4>
              <p class="preview__publisher">${recipe.publisher}</p>
             
          </div>
        </a>
      </li>
  `;
  }
}

export default new ResultView();
