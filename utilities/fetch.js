import useSWR from 'swr'
export const SERVER = `https://api.eh.gdla.io`

export const api = (x) => x.startsWith('/') ? SERVER + x : SERVER + '/' + x

export const json = async (x) => {
  const y = await fetch(x)
  return await y.json()
}

export const useAPI = (path) => useSWR(api(path), json)
