import axios from 'axios';

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}` //must send token to access route
    }
  };
  
  const response = await axios.post(API_URL, goalData, config)

  return response.data;
};

const goalService = {
  createGoal
};

export default goalService;