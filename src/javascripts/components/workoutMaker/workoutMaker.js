import './workoutMaker.scss';

const workoutMaker = (workout) => {
  const domString = ` <div id="workouts-category">
                        <img class="workouts-pin" src="${workout.imageURL}" alt="Card image">
                        <div id="workouts-edit">
                          <a><i class="fas fa-edit"></i></a>
                        </div>
                      </div>`;
  return domString;
};

export default { workoutMaker };
