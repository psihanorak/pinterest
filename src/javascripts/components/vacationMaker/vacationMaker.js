import './vacationMaker.scss';

const vacationMaker = (vacation) => {
  const domString = ` <div id="vacations-category">
                        <img class="vacations-pin" src="${vacation.imageURL}" alt="Card image">
                        <div id="vacations-edit">
                          <a><i class="fas fa-edit"></i></a>
                        </div>
                      </div>`;
  return domString;
};

export default { vacationMaker };
