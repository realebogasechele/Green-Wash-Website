/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import featureData from 'data/feature.data';

export default function Feature() {
  return (
   <section id='feature' sx={{variant: 'section.feature'}}>
     <Container sx={styles.section}>
       <SectionHeader slogan={'Application Features'} title={'Meet The Features of Our Application'}/>
       <Grid sx={styles.grid}>
         {featureData.map((item)=>(
           <FeatureCard
           key={item.id}
           src={item.imgSrc}
           alt={item.altText}
           title={item.title}
           text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  section:{
    mt:[7, 7, null, null, 0],
    mb:[7, 7, null, null, 8],
    pt: [3, 5, null, 2],
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
