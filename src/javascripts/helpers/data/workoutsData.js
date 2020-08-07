import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getWorkouts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/workouts.json`)
    .then((response) => {
      const workoutsObjects = response.data;
      const workouts = [];
      Object.keys(workoutsObjects).forEach((workoutId) => {
        workoutsObjects[workoutId].id = workoutId;
        workouts.push(workoutsObjects[workoutId]);
      });
      resolve(workouts);
    })
    .catch((err) => reject(err));
});

const getWorkoutsById = (workoutsId) => axios.get(`${baseUrl}/workouts/${workoutsId}.json`);

const deleteWorkouts = (workoutsId) => axios.delete(`${baseUrl}/workouts/${workoutsId}.json`);

export default { getWorkouts, getWorkoutsById, deleteWorkouts };
