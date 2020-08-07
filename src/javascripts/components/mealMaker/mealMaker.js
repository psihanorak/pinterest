import './mealMaker.scss';

const mealMaker = (meal) => {
  const domString = ` <div id="meals-category" class=${meal.Id}>
                        <img class="meals-pin" src="${meal.imageURL}" alt="Card image">
                        <div id="meals-edit">
                          <a><i class="fas fa-edit" data-toggle="modal" data-target="#mealsModal"></i></a>
                        </div>
                      </div>`;

  return domString;
};

export default { mealMaker };
