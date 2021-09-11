
import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    // baseURL: 'https://autumnfish.cn',
    timeout: 100000,
  })

  return instance(config)
}