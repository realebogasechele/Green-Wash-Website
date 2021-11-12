/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import img2 from 'assets/img2.png'
import shapePattern from 'assets/green-pattern2.png';

const data = {
  subTitle: 'Waterless Car Wash System',
  title: 'Did You Know You Could Clean Your Car Without Water ?',
  description:
    'By only using 750ml of water per wash, we save fresh drinking water compared to the usual 200L. All products used to clean the car are harmless water-soluble products often found in food. This means that when it rains or cloths are cleaned, any of the residue entering back into the water system does not pollute the water.',
};

export default function About() {
  return (
   <section id='info' sx={{variant: 'section.coreFeature'}}>
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
        />
      </Box>
      <Box sx={styles.thumbnail}>
        <Image src={img2} width='550px'alt="Thumbnail" sx={styles.img}/>
        <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape"/>
        </Box>
      </Box>
    </Container>
   </section>
  );
}

const styles = {
  img:{
    borderRadius: '2%',
    boxShadow: '5px 5px 10px #888888',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'none', 'none', null, 'inline-block'],
  },
};
