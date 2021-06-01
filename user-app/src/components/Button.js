import propTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} className='btnPrimary' style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}



Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func.isRequired,
}

export default Button