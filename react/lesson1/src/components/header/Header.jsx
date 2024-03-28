import classes from './Header.module.css'

const Header = (props) => {
    const headerStyles = {
        color: 'white',
        backgroundColor: 'green'
    }
    // props.titleName = 'Header1'

    return (
        <header className={classes.header} style={headerStyles}>
            {props.titleName}
        </header>
    )
}

export default Header