import axios from 'axios';

const getPcs = (user) => {
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/user/${user}/pcs`)
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