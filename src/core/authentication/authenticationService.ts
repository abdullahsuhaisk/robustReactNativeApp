import axios from 'axios';

export function Login({ mail, password }: { mail: string; password: string }) {
  return axios.post(
    'https://dummyjson.com/auth/login',
    {
      username: mail,
      password: password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
