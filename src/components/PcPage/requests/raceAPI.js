import axios from 'axios';

const getRaces = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/race`)
    .then((res) =>
    {
      resolve(res.data)
    })
    .catch((err) =>
    {
      reject(err)
    });
  });
};

export default {getRaces}