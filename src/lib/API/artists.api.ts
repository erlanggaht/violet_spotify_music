import axios from "axios";
import { getSession } from 'next-auth/react'

const artistInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API,
});

artistInstance.interceptors.request.use(async(config) => {
  const session:any = await getSession()
  config.headers.Authorization = "Bearer " + session?.token
  return config
})

export const ArtistsAPI = {
  getAll: async (config: TypeParams<string>) => {
    const params = config.params || {};

    try {
      const response = await artistInstance("/artists", {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
        throw new Error(JSON.stringify({ error: error, location: 'ArtistAPI - getAll' }))
    }
  },
};

type TypeParams<T> = {
  params: {
    ids: T;
  };
};
