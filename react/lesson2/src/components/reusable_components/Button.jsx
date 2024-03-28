const Button = ({ children, color = 'black', fontSize, ...props }) => {
    console.log(color);
    const buttonStyles = {
        backgroundColor: color,
        fontSize: fontSize,
        color: 'white',
        padding: '5px 7px',
        borderRadius: '4px',
        border: 0,
        cursor: 'pointer'
    }

    return <button {...props} style={buttonStyles}>{children}</button>
}

export default Button;
