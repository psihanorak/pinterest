const mealMaker = (meal) => {
  const domString = `<div id="meal-pins">
                      <img class="card-img" src="${meal.imageURL}" alt="Card image"></img>
                     </div>
                    `;
  return domString;
};

export default { mealMaker };
