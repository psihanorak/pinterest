import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getModels = () => new Promise((resolve, reject) => {
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

export default { getModels };
