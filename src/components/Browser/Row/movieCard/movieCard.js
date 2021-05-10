import classes from './movieCard.module.css';

import Thumbnail from '../../../../images/Thumbnail.jpg';


const MovieCard = (props) =>  {

    return(
        <div className={classes.movieCard}>
            <img src={Thumbnail} alt="movie" className={classes.image}/>    
        </div>


       
    )
}

export default MovieCard;