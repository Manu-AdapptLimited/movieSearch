import React, { Component } from 'react'
import { connect } from "react-redux";
import { searchMovie, featchMovie, searchedMovie } from "../movieRedux/movieAction/searchAction";

class MovieSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    }
  }
  componentDidMount() {
    localStorage.setItem("history", JSON.stringify(this.props.text));

  }
  onChange = e => {
    this.props.searchMovie(e.target.value);


  };

  onSubmit = e => {
    e.preventDefault();
    if (localStorage.getItem("history")) {
      if (this.state.history.indexOf(this.props.text) == -1) {
        this.state.history.unshift(this.props.text);
        if (this.state.history.length > 5) {
          this.state.history.pop();
        }
        localStorage["history"] = JSON.stringify(this.state.history)
      }

    }
    this.props.searchedMovie(this.props.text);
  }


  render() {

    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-5 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
            </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>

          </form>
          <div>
            {
              this.state.history ? this.state.history.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              }) : 'no history'
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.movie.text,
    movies: state.movie.movies

  }
};
export default connect(mapStateToProps, { searchMovie, featchMovie, searchedMovie })(MovieSearchForm);