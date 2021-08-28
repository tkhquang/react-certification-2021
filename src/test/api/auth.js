import authData from '../mocks/auth.json';

export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        console.log(authData);
        return resolve(authData);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
