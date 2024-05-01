import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ text, onClick }) => {
  let shortText = text?.substring(0, 10) ?? ''

  if (shortText.length < text?.length ?? 0) {
    shortText += '...'
  } 

  return (
    <button onClick={onClick} className="button">
      {shortText} 
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

