import axios from "axios";

const _base_KEY = "28650913-a5a0156fd84fe2d246ee1c6fc";

export const pixabyAPI = async ( query, page ) => {
    const res = await axios.get(`https://pixabay.com/api/?q=${ query }&page=${ page }&key=${ _base_KEY }&image_type=photo&orientation=horizontal&per_page=12`);
    return res.data;
};