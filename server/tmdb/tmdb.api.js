import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints.js";

const tmdbApi = {
    mediaList: async ({mediaType, mediaCategory, page}) => axiosClient.get(
        tmdbEndpoints.mediaList({mediaType, mediaCategory, page})
    ),
    mediaDetail: async ({mediaType, page}) => axiosClient.get(
        tmdbEndpoints.mediaDetail({mediaType, page})
    ),
    mediaGenres: async ({mediaType}) => axiosClient.get(
        tmdbEndpoints.mediaGenres({mediaType})
    ),
    mediaCredits: async ({mediaType, page}) => axiosClient.get(
        tmdbEndpoints.mediaCredits({mediaType, page})
    ),
    mediaVideos: async ({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaVideos({mediaType, mediaId})
    ),
    mediaImages: async ({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaImages({mediaType, mediaId})
    ),
    mediaRecommend: async ({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaRecommend({mediaType, mediaId})
    ),
    mediaSearch: async ({mediaType, query, page}) => axiosClient.get(
        tmdbEndpoints.mediaSearch({mediaType, query, page})
    ),
    personDetail: async ({personId}) => axiosClient.get(
        tmdbEndpoints.personDetail({personId})
    ),
    personMedia: async ({personId}) => axiosClient.get(
        tmdbEndpoints.personMedia({personId})
    ),    
}

export default tmdbApi;