import axios from 'axios';

const addPc = (pc) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.post(`https://localhost:44312/api/pc/add`, pc)
          .then((res) =>
          {
            resolve(res);
          })
          .catch((err) =>
          {
            reject(err);
          })
  });
};

const getPc = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`https://localhost:44312/api/pc/${id}`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    })
  })
}

export default {addPc, getPc};