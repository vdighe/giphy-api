import axios from 'axios';

// Index, Show, Create, Update, Destroy

// Get All Giphys matching the search
const getAllGiphysBySearch = (userInput) => {
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=uH1M7N0WtIpDAAtvNJO33yZXzwZhRoZq&limit=5&q=${userInput}`);
};

export { getAllGiphysBySearch };