import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getSupermodels = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/models.json`)
    .then((response) => {
      const modelsObjects = response.data;
      const models = [];
      Object.keys(modelsObjects).forEach((modelId) => {
        modelsObjects[modelId].id = modelId;
        models.push(modelsObjects[modelId]);
      });
      resolve(models);
    })
    .catch((err) => reject(err));
});

const getSupermodelsById = (supermodelsId) => axios.get(`${baseUrl}/supermodels/${supermodelsId}.json`);

const deleteSupermodels = (supermodelsId) => axios.delete(`${baseUrl}/supermodels/${supermodelsId}.json`);

export default { getSupermodels, getSupermodelsById, deleteSupermodels };
