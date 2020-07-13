const workoutMaker = (workout) => {
  const domString = `<div id="workout-pins">
                      <img class="card-img" src="${workout.imageURL}" alt="Card image"></img>
                     </div>
                    `;
  return domString;
};

export default { workoutMaker };
