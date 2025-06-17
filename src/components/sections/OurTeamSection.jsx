import { teamMembers } from '../../data/teamMembers'
import { SectionHeader } from '../common'
import { TeamMemberList } from '../lists'

function OurTeamSection () {
  return (
    <section className='section deco deco--line'>
      <div className='container text-center'>
        <SectionHeader subtitle='Meet Our Team' title='Get to know us'>
          <div className='char-limit-1'>
            Behind every cake, swirl, and sprinkle is a team of passionate
            professionals who live and breathe confectionery. Get to know the
            creative minds (and sweet tooths) that make our bakery so special.
          </div>
        </SectionHeader>

        <TeamMemberList list={teamMembers}></TeamMemberList>
      </div>
    </section>
  )
}
export default OurTeamSection
