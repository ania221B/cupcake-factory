import { Link } from 'react-router-dom'

/**
 * Button component for rendering styled buttons or links.
 *
 * @param {string} buttonText - The text to display on the button.
 * @param {string} ariaLabel - Accessible label for the button.
 * @param {string} type - The type of the button (default is 'button').
 * @param {string} path - The path for the link (if isLink is true).
 * @param {boolean} isLink - Whether the button is a link.
 * @param {boolean} hasArrow - Whether to display an arrow next to the text.
 * * @param {boolean} isAccent - Whether the button has accent styling.
 * @param {boolean} isLines - Whether the button has lines styling (thin outline, filled in on hover).
 * @param {boolean} isInvisible - Whether the button has invisible styling (just text and underline on hover).
 *
 */

function Button ({
  buttonText,
  ariaLabel,
  type = 'button',
  path,
  onClick,
  isLink = false,
  hasArrow = false,
  isAccent = false,
  isLines = false,
  isInvisible = false
}) {
  const classes = ['btn']
  if (isAccent) classes.push('btn--accent', 'bg-animation')
  if (hasArrow) classes.push('btn--arrow')
  if (isLines) classes.push('btn--lines', 'bg-animation')
  if (isInvisible) classes.push('btn--invisible')

  const commonProps = {
    className: classes.join(' '),
    'aria-label': ariaLabel || buttonText
  }

  if (isLink && onClick) {
    console.warn(
      'Button component: `onClick` will not be used when `isLink is true.'
    )
  }

  return isLink ? (
    <Link to={path} {...commonProps}>
      <span>{buttonText}</span>
      {hasArrow && <span>&#8594;</span>}
    </Link>
  ) : (
    <button type={type} {...commonProps} onClick={onClick}>
      <span>{buttonText}</span>
      {hasArrow && <span>&#8594;</span>}
    </button>
  )
}

export default Button
