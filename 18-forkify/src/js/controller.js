import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  state,
  loadRecipe,
  loadSearchResults,
  getSearchResultsPage,
  updateServings,
  addBookmark,
  deleteBookmark,
  uploadRecipe,
} from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // ' update result view to mark selected search result
    resultView.update(getSearchResultsPage());
    bookmarksView.update(state.bookmarks);
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

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  updateServings(newServings);

  // Update the recipe view
  recipeView.update(state.recipe);
};

const controlAddBookmark = function () {
  // Add/remove bookmarks
  if (!state.recipe.bookmarked) addBookmark(state.recipe);
  else deleteBookmark(state.recipe.recipeId);

  // Update recipe view
  recipeView.update(state.recipe);

  //Render bookmarks
  bookmarksView.render(state.bookmarks);
};

const controlBookmark = function () {
  bookmarksView.render(state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await uploadRecipe(newRecipe);
    console.log(state.recipe);

    recipeView.render(state.recipe);

    // Sucess message
    addRecipeView.renderMessage();

    // Render bookmark view

    bookmarksView.render(state.bookmarks);

    //Change ID in URL

    window.history.pushState(null, '', `#${state.recipe.recipeId}`);

    //Close form window
    setTimeout(() => addRecipeView._toggleWindow(), MODAL_CLOSE_SEC);
  } catch (error) {
    console.error('💥💥💥', error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
