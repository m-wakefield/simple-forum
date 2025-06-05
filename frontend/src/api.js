
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (email) => API.post('/users/login', { email });
