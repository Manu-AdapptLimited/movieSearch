import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { connect } from "react-redux";
import { featchMovie, setLoading } from "../movieRedux/movieAction/searchAction";
import Spinner from './layout/Spinner';

class MovieContainer extends Component {

    componentDidMount() {
        this.props.featchMovie();
        this.props.setLoading();
    }
    render() {
        const { movies, searchedMovie } = this.props;
        console.log(movies);

        const movieList = movies && movies.filter((data) => {
            if (this.props.text == null)
                return data

            else if (data.title.toLowerCase().includes(this.props.text.toLowerCase()) || data.series.name.toLowerCase().includes(this.props.text.toLowerCase())) {
                return data
            }
        }).map(movie => {
            console.log("jgfjsdghjfshjjksjdklfjmudofjsl", movie.characters);
            return (
                <div className="col-md-3 mb-4" key={movie.title} >
                    <MovieCard movie={movie} />
                </div>
            );

        });
        

        let content = this.props.loading ? <Spinner /> : movieList;

        return (
            <div className="row">
            
                {/* {content} */}
                {
                    searchedMovie && searchedMovie.map((movie) => {
                        return (
                            <div className="col-md-3 mb-4" key={movie.title} >
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.movie.text,
        movies: state.movie.movies,
        loading: state.movie.loading,
        searchedMovie: state.movie.searchedMovie
    }
}
export default connect(mapStateToProps, { featchMovie, setLoading })(MovieContainer);

