import axios from 'axios';

const updateSkills = (skills) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.put(`https://dungeonmastersapi20190214061000.azurewebsites.net/api/skill/`, skills)
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