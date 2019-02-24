import axios from 'axios';

const getRaces = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/race`)
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