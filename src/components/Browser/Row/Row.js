import MovieCard from './movieCard/movieCard';

import classes from './Row.module.css';


const Row = (props) =>   {

    return(
        <div className={classes.Row}>
            <h2 className={classes.Label}>{props.label}</h2>
        
        <div className={classes.rowMovies}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
        </div>


       
    )
}

export default Row;