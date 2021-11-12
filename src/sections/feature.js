/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Complex Agents',
    title: 'Complex Agents',
    text:
      'This means that when making a booking, an agent assigned to that booking can only be found in your complex which allows for a well-maintained system of booking creation',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Complex Exclusivity',
    title: 'Complex Exclusivity',
    text:
      'Let’s just get this out of the way - There will not be anyone allowed to make bookings if they do not come from a registered complex. This means if your complex is registered with us, you can have premium waterless car wash bookings to your hearts content',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'We believe it’s important for everyone to have access to bookings – especially when it comes to premium washes and premium bookings.',
  },
];

export default function Feature() {
  return (
   <section id='feature' sx={{variant: 'section.feature'}}>
     <Container sx={styles.section}>
       <SectionHeader slogan={'Application Features'} title={'Meet The Features of Our Application'}/>
       <Grid sx={styles.grid}>
         {data.map((item)=>(
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
