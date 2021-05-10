import classes from './Button.module.css'

const Button = (props) => {

    return(
        <button className={classes.Button} onClick={props.onClick}>
                {props.buttonValue}
        </button>
    )

}

export default Button;