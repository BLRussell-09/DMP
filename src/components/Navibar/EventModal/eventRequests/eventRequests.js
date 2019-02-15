import axios from 'axios';

const getRandEvent = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/event`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    });
  })
};

export default {getRandEvent}