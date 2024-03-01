import data from './assets/json/data.json';

export const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
