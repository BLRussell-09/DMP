import axios from 'axios';

const getClasses = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/class`)
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