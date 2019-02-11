import axios from 'axios';

const addWeapon = (weapon) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.post(`https://localhost:44312/api/weapons/add`, weapon)
    .then((res) =>
    {
      resolve(res);
    }).catch((err) =>
    {
      reject(err);
    })
  });
};

const addItem = (item) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.post(`https://localhost:44312/api/item/add`, item)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err);
    })
  })
}

const deleteWeapon = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.delete(`https://localhost:44312/api/weapons/${id}`)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err);
    })
  });
}

const deleteItem = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.delete(`https://localhost:44312/api/item/${id}`)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err);
    })
  });
}

export default {addWeapon, deleteWeapon, addItem, deleteItem};