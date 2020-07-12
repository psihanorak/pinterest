import mealsData from '../../helpers/data/mealsData';
import mealsComponent from '../meals/meals';
import boardList from '../boardList/boardList';
import utils from '../../helpers/utils';

const createMeals = () => {
  mealsData.getMeals()
    .then((meals) => {
      console.warn('createMeals worked!', meals);
      let domString = `<div id="meal-header">
                        <h1>Meals</h1>
                       </div>
                       <div id="back-to-boards">
                       <a><span>Back to Boards</span></a>
                       </div>
                       <div id="meal-category" class="d-flex flex-wrap">
                      `;

      meals.forEach((meal) => {
        domString += mealsComponent.mealMaker(meal);
      });

      domString += '</div>';

      utils.printToDom('#meals', domString);
    })
    .catch((err) => console.error('createMeals did not work!', err));
};

const showMealsEvent = (e) => {
  const boardId = e.currentTarget.id;
  createMeals(boardId);
  $('#board-header').hide();
  $('#wallBoard').hide();
  $('#meals').show();
};

const hideMealsEvent = (e) => {
  const boardId = e.target.id;
  boardList.createWallBoard(boardId);
  $('#board-header').show();
  $('#wallBoard').show();
  $('#meals').hide();
};

export default { createMeals, showMealsEvent, hideMealsEvent };
