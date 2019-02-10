import axios from 'axios';

const getPcs = (user) => {
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/user/${user}/pcs`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    })
  });
}


export default {getPcs}