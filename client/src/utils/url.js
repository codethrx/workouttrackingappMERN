const baseURL = `http://localhost:5000`;
const workoutAPI = `/api/workouts`;
const authAPI = "/api/auth";
console.log(`${baseURL}${workoutAPI}`);
export default {
  workout: {
    baseURL: `${baseURL}${workoutAPI}`,
  },
  authentication: {
    baseURL: `${baseURL}${authAPI}`,
  },
};
