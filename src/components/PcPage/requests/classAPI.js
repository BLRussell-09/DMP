import axios from 'axios';

const getClasses = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/class`)
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

export default {getClasses}