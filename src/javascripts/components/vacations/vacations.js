const vacationMaker = (vacation) => {
  const domString = `<div id="vacation-pins">
                      <img class="card-img" src="${vacation.imageURL}" alt="Card image"></img>
                     </div>
                    `;
  return domString;
};

export default { vacationMaker };
