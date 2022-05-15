
const endpoints = {
  baseUrl:'https://gateway.marvel.com',
  timestamp:'1',
  apikey:'05b8306c71e79ac2b81e7642a9b7215e',
  hash:'61134e2ad7f3f80b8634612b3c4d07ad'
}

export const urlParams = `ts=${endpoints.timestamp}&apikey=${endpoints.apikey}&hash=${endpoints.hash}`

export const urlConfig = {
  heroes:`${endpoints.baseUrl}/v1/public/characters`
}
