import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    'Content-Type': 'application/json',
    // Add any headers you need for authentication, etc.
  },
});

export default apiClient;
