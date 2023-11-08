import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  }

  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const userDetail = JSON.parse(userString);
    return userDetail;
  }

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('user', JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate('/dashboard');
  }

  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  const loginUser = async (email, password) => {
    try {
      const response = await http.post('/login', {
        email,
        password
      });

      if (response.data.status === 'success') {
        saveToken(response.data.user, response.data.token);
      } else {
        // Handle login failure, e.g., show an error message
      }
    } catch (error) {
      // Handle any network or server errors
    }
  }

  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    loginUser
  };
}
