function HeroImage ({ imgSrc, imgAlt, imgTitle, imgClass = 'hero__img' }) {
  return <img src={imgSrc} alt={imgAlt} title={imgTitle} className={imgClass} />
}
export default HeroImage
