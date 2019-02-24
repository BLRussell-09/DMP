import axios from 'axios';

const addWeapon = (weapon) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.post(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/weapons/add`, weapon)
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
    axios.post(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/item/add`, item)
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
    axios.delete(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/weapons/${id}`)
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
    axios.delete(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/item/${id}`)
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