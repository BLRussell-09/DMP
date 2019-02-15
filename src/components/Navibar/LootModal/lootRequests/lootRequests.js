import axios from 'axios';

const getRandLoot = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/loot`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    });
  })
};

export default {getRandLoot}