import { nanoid } from 'nanoid'
import { TeamMemberCard } from '../ui'

function teamMemberList ({ list }) {
  return (
    <ul className='grid-auto-fit margin-block-start-64 padding-0' role='list'>
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
export default teamMemberList
