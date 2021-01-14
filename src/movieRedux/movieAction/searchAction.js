import { SEARCH_MOVIE, FETCH_MOVIES,LOADING, SEARCHED_MOVIE } from "./type";
import CryptoJS from "crypto-js";
import $ from "jquery";



export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const featchMovie = () => {

  return (dispatch) => {
    const PRIV_KEY = "5c57606feda50f13debad6f1ef4e2907172d836a";
    const PUBLIC_KEY = "0adf709e7a9b552c76c9a2c1906fc142";

    let ts = new Date().getTime();
    let hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    let characterId = '1009718';
    const url = 'http://gateway.marvel.com:80/v1/public/comics';
     $.getJSON(url, {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash,
      characters: characterId,
    
    })
      .done(function (data) {
        dispatch({
        type:FETCH_MOVIES,
        payload:data.data.results
      })
      })
      .fail(function (err) {
        // the error codes are listed on the dev site
        console.log(err);
      });

  }
}  

export const setLoading = () => {
  return {
    type: LOADING
  };
};

export const searchedMovie=(text)=>{
  return {
    type:SEARCHED_MOVIE,
    payload:text
  }
}