/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import vishen from 'assets/Members/vishen.png';
import shaniel from 'assets/Members/shaniel.png';
import sine from 'assets/Members/sine.png';
import anesu from 'assets/Members/anesu.png';
import prince from 'assets/Members/prince.png';
import tyson from 'assets/Members/tyson.png';
import rea from 'assets/Members/rea.png';

const data = [
  {
    id: 1,
    imgSrc: shaniel,
    altText: 'Shaniel Ramguthy',
    title: 'Shaniel Ramguthy',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: vishen,
    altText: 'Vishen Mahabeer',
    title: 'Vishen Mahabeer',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: sine,
    altText: 'Sinethemba Mabaso',
    title: 'Sinethemba Mabaso',
    designation: 'Front-End Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: anesu,
    altText: 'Anesu Kwangware',
    title: 'Anesu Kwangware',
    designation: 'Front-End Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: prince,
    altText: 'Prince Makhubela',
    title: 'Prince Makhubela',
    designation: 'Front-End Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: tyson,
    altText: 'Tyson Tumba Dianda',
    title: 'Tyson Tumba Dianda',
    designation: 'Business Analyst',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 7,
    imgSrc: rea,
    altText: 'Realeboga Sechele',
    title: 'Realeboga Sechele',
    designation: 'Full-Stack Developer',
    socialProfile: [
      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/onceknownriley',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/onceknownriley/',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/realeboga-kagiso-sechele-098195166/?originalSubdomain=za',
        icon: <FaLinkedinIn />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container sx={styles.section}>
        <SectionHeader
        slogan='Our Team'
        title='Meet The Green Wash Team'
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
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
