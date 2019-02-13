import axios from 'axios';

const updateSkills = (skills) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.put(`https://localhost:44312/api/skill/`, skills)
    .then((res) =>
    {
      resolve(res);
    })
    .catch((err) =>
    {
      reject(err);
    });
  })
}

export default {updateSkills};