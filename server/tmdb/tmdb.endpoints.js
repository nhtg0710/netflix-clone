import tmdbConfig from './tmdb.config'

const tmdbEndpoints = {
    mediaList: ({mediaType, mediaCategory, page}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({mediaType}) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaSearch: ({mediaType, query, page}) => tmdbConfig.getUrl(
        `search/${mediaType}`, {query, page}
    ),
    mediaImages: ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    personDetail: ({personId}) => tmdbConfig.getUrl(
        `person/${personId}`
    ),
    personMedia: ({personId}) => tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    ),
};

export default tmdbEndpoints;