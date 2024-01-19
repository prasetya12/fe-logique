import api from "./api";

export const getMusic = async (params) => {
    try {
        const response = await api.get(`/search?entity=musicTrack&term=${params?.search}&limit=${params?.limit}`);
        return response;
    } catch (err) {
        throw new Error(JSON.stringify(err.response.data));
    }
};