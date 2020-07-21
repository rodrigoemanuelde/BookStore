import api from '@config/api';

export const getBookList = () =>
  api.get('/bookList').then((response) => {
    if (response.ok) {
      console.warn(response.data);
      return response.data;
    }
    return;
  });
