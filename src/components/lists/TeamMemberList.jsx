import { nanoid } from 'nanoid'
import { TeamMemberCard } from '../ui'

function TeamMemberList ({ list }) {
  return (
    <ul
      className='team-member-list grid-auto-fit margin-block-start-64 padding-0'
      role='list'
    >
      {list.map(item => {
        return (
          <li key={nanoid()}>
            <TeamMemberCard item={item}></TeamMemberCard>
          </li>
        )
      })}
    </ul>
  )
}
export default TeamMemberList
