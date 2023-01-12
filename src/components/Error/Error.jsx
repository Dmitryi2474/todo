import classes from './Error.module.scss'

const Error = () => {
    return (
        <div className={classes.Error}>
            <img src="../../../img/error.webp" alt="error"/>
            <span>Упс! Что-то пошло не так. Пожалуйста, попробуйте позже.</span>
        </div>
    )
}

export default Error

 