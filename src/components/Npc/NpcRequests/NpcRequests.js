import axios from 'axios';

const getRandomNpc = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/npc/random`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    })
  })
};

export default {getRandomNpc}