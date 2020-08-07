import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardsPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardsPins.json`)
    .then((response) => {
      const boardsPinsObjects = response.data;
      const boardsPins = [];
      Object.keys(boardsPinsObjects).forEach((boardsPinsId) => {
        boardsPinsObjects[boardsPinsId].id = boardsPinsId;
        boardsPins.push(boardsPinsObjects[boardsPinsId]);
      });
      resolve(boardsPins);
    })
    .catch((err) => reject(err));
});

export default { getBoardsPins };
