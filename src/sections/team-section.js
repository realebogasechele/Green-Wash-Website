/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import team from 'data/team.data'

export default function TeamSection() {
  return (
    <section>
      <Container sx={styles.section}>
        <SectionHeader
        slogan='Our Team'
        title='Meet The Green Wash Team'
        />
        <Grid sx={styles.grid}>
          {team.map((item)=>(
            <TeamCard
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            designation={item.designation}
            social={item.socialProfile} 
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  section:{
    mt:[7, null, 7, null, 7]
  },
  grid: {
    mt: [0, null, -6, null, -4],
    mb:[0, null, -6, null, 8],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
