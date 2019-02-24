import axios from 'axios';

const getRandLoot = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/loot`)
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