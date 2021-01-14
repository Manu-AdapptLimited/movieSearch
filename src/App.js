
import React from "react"
import { Provider } from "react-redux";
import store from "./store";
import MovieSearchForm from "./movieComponents/MovieSearchForm";
import MovieContainer from "./movieComponents/MovieContainer";
import { BrowserRouter } from "react-router-dom"


function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <MovieSearchForm />
          <MovieContainer />
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
