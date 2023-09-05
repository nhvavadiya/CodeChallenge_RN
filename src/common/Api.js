const URL = 'https://jsonplaceholder.typicode.com/';

module.exports = {
  async getPostsData() {
    return fetch(`${URL}todos`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        return data;
      })
      .catch(e => {
        console.log('getPostsData error ----->', e);
      });
  },
  async getTodoData() {
    return fetch(`${URL}posts`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        return data;
      })
      .catch(e => {
        console.log('getTodoData error ----->', e);
      });
  },
};
