import mealsData from '../../helpers/data/mealsData';
import utils from '../../helpers/utils';

import boardsComponent from '../boards/boards';
import mealMaker from '../mealMaker/mealMaker';
import modals from '../modals/modals';

import './meals.scss';

const createMeals = () => {
  mealsData.getMeals()
    .then((meals) => {
      let domString = ` <div id="meals-boards">
                          <button type="button" class="btn btn-secondary btn-sm">Back</button>
                        </div>
                        <div id="meals-avatar"> 
                          <div id="meals-header">
                            <h1>${meals.name}</h1>
                          </div>
                          <div id="avatar">
                            <img src="src/images/profile.png" class="card-img-top" alt="...">
                          </div>
                        </div>
                        <div id="meals-container" class="d-flex flex-wrap">`;

      meals.forEach((meal) => {
        domString += mealMaker.mealMaker(meal);
      });

      domString += '</div>';
      utils.printToDom('#meals', domString);
    })
    .catch((err) => console.error('createMeals did not work', err));
};

const showMealsEvent = (e) => {
  const boardId = e.currentTarget.id;
  createMeals(boardId);
  $('#boards').addClass('hide');
  $('#meals').removeClass('hide');
};

const hideMealsEvent = (e) => {
  const boardId = e.target.id;
  boardsComponent.createBoards(boardId);
  $('#boards').removeClass('hide');
  $('#meals').addClass('hide');
};

const deleteMealsEvent = (e) => {
  const mealId = e.target.closest('#meals-category').id;
  mealsData.deleteMeals(mealId)
    .then(() => {

    })
    .catch((err) => console.error('deleteMeals does not work', err));
};

const mealsClickEvents = () => {
  $('body').on('click', '.board1', showMealsEvent);
  $('body').on('click', '#meals-boards', hideMealsEvent);
  $('body').on('click', '#meals-edit', modals.mealModal);
  $('body').on('click', '#delete-meals-btn', deleteMealsEvent);
};

export default { mealsClickEvents };
