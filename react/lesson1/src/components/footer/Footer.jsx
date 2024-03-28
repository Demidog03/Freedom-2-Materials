import classes from './Footer.module.css'

function Footer(props) {
    return (
        <footer className={classes.footer}>{props.titleName}</footer>
    )
}

export default Footer