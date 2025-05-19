function SectionHeader ({
  title,
  subtitle,
  text,
  titleClasses = '',
  subtitleClasses = '',

  children
}) {
  let subtitleStyles = ['section__subtitle']
  if (subtitleClasses) subtitleStyles.push(subtitleClasses)

  let titleStyles = ['section__title']
  if (titleClasses) titleStyles.push(titleClasses)

  return subtitle ? (
    text ? (
      <header className='section__header flow'>
        <div className='flow'>
          <h2 className={subtitleStyles.join(' ')}>{subtitle}</h2>
          {title && <p className={titleStyles.join(' ')}>{title}</p>}
          <p>{text}</p>
        </div>
        {children}
      </header>
    ) : (
      <header className='section__header flow'>
        <h2 className={subtitleStyles.join(' ')}>{subtitle}</h2>
        {title && <p className={titleStyles.join(' ')}>{title}</p>}
        {children}
      </header>
    )
  ) : text ? (
    <header className={`section__header ${children ? 'even-columns' : ''}`}>
      <div className='flow'>
        <h2 className={titleStyles.join(' ')}>{title}</h2>
        <p>{text}</p>
      </div>
      {children}
    </header>
  ) : (
    <header className={`section__header ${children ? 'even-columns' : ''}`}>
      <h2 className={titleStyles.join(' ')}>{title}</h2>
      {children}
    </header>
  )
}
export default SectionHeader
