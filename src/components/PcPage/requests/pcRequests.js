import axios from 'axios';

const addPc = (pc) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.post(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/pc/add`, pc)
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
    axios.get(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/pc/${id}`)
    .then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    })
  })
}

const updatePc = (pc, id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.put(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/pc/${id}`, pc)
    .then((res) =>
    {
      resolve(res);
    }).catch((err) =>
    {
      reject(err);
    })
  })
}
export default {addPc, getPc, updatePc};