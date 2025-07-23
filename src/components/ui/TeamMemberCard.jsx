function TeamMemberCard ({ item }) {
  const { name, role, image, imageTitle, bio } = item
  return (
    <article className='team-member-card'>
      <div className='team-member-card__img'>
        <img src={image} alt={name} title={imageTitle} />
      </div>
      <header className='flow'>
        <h3 className='team-member-card__name'>{name}</h3>
        <p className='team-member-card__role'>{role}</p>
      </header>
      <p>{bio}</p>
    </article>
  )
}
export default TeamMemberCard
