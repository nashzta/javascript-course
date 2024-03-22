import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  state,
  loadRecipe,
  loadSearchResults,
  getSearchResultsPage,
} from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await loadSearchResults(query);

    // resultView.render(state.search.results);
    resultView.render(getSearchResultsPage());

    //Render pagination
    paginationView.render(state.search);
  } catch (error) {
    recipeView.renderError(error.message);
  }
};

const controlPagination = function (page) {
  // resultView.render(state.search.results);
  resultView.render(getSearchResultsPage(page));

  //Render pagination
  paginationView.render(state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
