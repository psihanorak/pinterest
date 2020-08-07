import boardsData from './boardsData';
import mealsData from './mealsData';
import workoutsData from './workoutsData';
import vacationsData from './vacationsData';
import supermodelsData from './supermodelsData';
import boardsPinsData from './boardsPinsData';

const getBoardsPins = () => new Promise((resolve, reject) => {
  boardsPinsData.getBoardsPins()
    .then((response) => {
      const boardsPins = response.data;

      boardsData.getBoardsById(boardsPins.boardsId).then((board) => {
        boardsPins.board = board.data;

        mealsData.getMealsById(boardsPins.mealsId).then((meal) => {
          boardsPins.meal = meal.data;

          workoutsData.getWorkoutsById(boardsPins.workoutsId).then((workout) => {
            boardsPins.workout = workout.data;

            vacationsData.getVacationsById(boardsPins.vacationsId).then((vacation) => {
              boardsPins.vacation = vacation.data;

              supermodelsData.getSupermodelsById(boardsPins.supermodelsId).then((supermodel) => {
                boardsPins.supermodel = supermodel.data;

                resolve(boardsPins);
              });
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getBoardsPins };
