import axios from 'axios';

const getRandomNpc = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/npc/random`)
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