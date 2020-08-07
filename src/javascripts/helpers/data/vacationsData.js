import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getVacations = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/vacations.json`)
    .then((response) => {
      const vacationsObjects = response.data;
      const vacations = [];
      Object.keys(vacationsObjects).forEach((vacationId) => {
        vacationsObjects[vacationId].id = vacationId;
        vacations.push(vacationsObjects[vacationId]);
      });
      resolve(vacations);
    })
    .catch((err) => reject(err));
});

const getVacationsById = (vacationsId) => axios.get(`${baseUrl}/vacations/${vacationsId}.json`);

const deleteVacations = (vacationsId) => axios.delete(`${baseUrl}/vacations/${vacationsId}.json`);

export default { getVacations, getVacationsById, deleteVacations };
