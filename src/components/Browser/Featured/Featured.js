import { useEffect, useState } from 'react';
import Button from '../../../UI/Button/Button';
import classes from './Featured.module.css';


const Featured = () =>   {
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(()=> {
        return new Promise(function(resolve, reject) {
  
            setTimeout(resolve, 1500);
        }).then(function() {
            setPlayVideo(true);
        });

    }, [playVideo]);



    return(
        <div className={classes.Featured}>
        {playVideo && (<iframe src="https://www.youtube.com/embed/7mPdQRXFiPA?controls=1&start=6;&autoplay=1&mute=1" 
                    title="Chasing Mavericks" 
                    frameBorder="0" 
                    allow=" autoplay; " 
                    allowFullScreen
                    className={classes.video}
            />)}
            <div className={classes.overlay}>
            <div className={classes.movieInfo}>
            <div className={classes.title}>
                Surf's Up
            </div>
                <div className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sollicitudin erat, nec cursus tellus dictum sed.
                        Nam porttitor imperdiet feugiat. Sed non ex aliquet dui rhoncus blandit vitae accumsan ex. Suspendisse nec condimentum 
                        justo.
                </div>

                <div className={classes.buttonWrapper}> 
                        <Button buttonValue="Play Movie"/>
                    </div>

                </div>
            </div>
       
        </div>


       
    )
}

export default Featured;