import axios from "axios";
import { getSession } from 'next-auth/react'

const topTrack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API,
});

topTrack.interceptors.request.use(async(config) => {
  const session:any = await getSession()
  config.headers.Authorization = "Bearer " + session?.token
  return config
})

export const TopTrackAPI = {
  getAll: async (config: TypeParams<string, number>) => {
    const params = config.params || {};
    try {
      const response = await topTrack("/me/top/tracks", {
        params: {
          ...params,
          limit: 5,
          time_range: 'long_term'
        },
      });
      return response;
    } catch (error) {
        throw new Error(JSON.stringify({ error: error, location: 'TopTrackAPI - getAll' }))
    }
  },
};

type TypeParams<T, N> = {
  params?: {
    limit?: N
  };
};
