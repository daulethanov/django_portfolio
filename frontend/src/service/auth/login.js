import axios from 'axios';

const login = async (email, password) => {
  const response = await axios.post('http://localhost:8000/api/users/login/', {
    email,
    password
  })
  .then(response=>{const { access, refresh} = response.data;
  const id = response.data.id;

  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  localStorage.setItem('userId', id);
  console.log(response.data);
  console.log(`User ${email} successfully logged in with id ${id}.`);

  return response;
  })
      .catch(error => {
    console.error(error);
  });
};


const refreshToken = async () => {
  const refresh = localStorage.getItem('refresh');
  const response = await axios.post('http://localhost:8000/api/users/refresh-token/', {
    refresh
  });
  const { access } = response.data;
  localStorage.setItem('access', access);
  return response;
};



const api = axios.create({
  baseURL: 'http://localhost:8000/api/users/login/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access')}`
  },

},
);


const makeApiRequest = async (request) => {
  try {
    const response = await request;
    return response;

  } catch (error) {
    if (error.response.status === 401) {
      await refreshToken();
      api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
      const retriedResponse = await request;
      return retriedResponse;

    }
    throw error;
  }
};


export { login, makeApiRequest, api };