import { Link } from 'react-router-dom'

/**
 * Button component for rendering styled buttons or links.
 *
 * @param {string} buttonText - The text to display on the button.
 * @param {string} ariaLabel - Accessible label for the button.
 * @param {string} type - The type of the button (default is 'button').
 * @param {string} path - The path for the link (if isLink is true).
 * @param {function} onClick - Function executed on button click.
 * @param {boolean} isLink - Whether the button is a link.
 * @param {boolean} hasArrow - Whether to display an arrow next to the text.
 *  @param {boolean} isAccent - Whether the button has accent styling.
 * @param {boolean} isIcon - Whether the button has icon styling.
 * @param {boolean} isInvisible - Whether the button has invisible styling (just text and underline on hover).
 * @param {boolean} isInactive - Whether the button is disabled, so has the disabled attribute on it.
 * @param {boolean} isItemCard - Whether the button has a card button styling (colorful, filled in background and a thin border of different color).
 * @param {boolean} isLines - Whether the button has lines styling (thin outline, filled in on hover).
 
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
  isIcon = false,
  isInvisible = false,
  isInvisibleWithArrow = false,
  isInactive = false,
  isItemCard = false,
  isLines = false,
  ...rest
}) {
  const baseClass = 'btn'
  const classes = [
    baseClass,
    hasArrow && 'btn--arrow',
    isAccent && 'btn--accent',
    isAccent && 'bg-animation',
    isIcon && 'btn--icon',
    isInvisible && 'btn--invisible',
    isInvisibleWithArrow && 'btn--invisible-w-arrow',
    isItemCard && 'btn--card',
    isItemCard && 'bg-animation',
    isLines && 'btn--lines',
    isLines && 'bg-animation',
    rest.className
  ]
  if (isInactive) {
    const index = classes.indexOf('bg-animation')
    classes.splice(index, 1)
  }

  const commonProps = {
    className: classes.filter(Boolean).join(' '),
    'aria-label': ariaLabel || buttonText
  }

  if (isLink && onClick) {
    console.warn(
      'Button component: `onClick` will not be used when `isLink is true.'
    )
  }

  return isLink ? (
    <Link to={path} {...commonProps}>
      {typeof buttonText === 'string' ? <span>{buttonText}</span> : buttonText}
      {hasArrow && <span>&#8594;</span>}
    </Link>
  ) : (
    <button
      type={type}
      {...commonProps}
      onClick={onClick}
      disabled={isInactive}
    >
      {typeof buttonText === 'string' ? <span>{buttonText}</span> : buttonText}
      {hasArrow && <span>&#8594;</span>}
    </button>
  )
}

export default Button
