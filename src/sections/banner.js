/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-picture.png";
import ShapeLeft from "assets/green-shape-left.png";
import ShapeRight from "assets/green-shape-right.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Waterless Car Wash System
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check out our website to find out more about us and what we offer.
            If you would like to get the Green Wash Experience, Downlad our
            mobile application today!
          </Text>
          <Link to="info" smooth={true} offset={-70} duration={500}>
            <Button variant="primary">
              Explore <FaArrowRight sx={styles.arrow} />
            </Button>
          </Link>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" width={'80%'} sx={styles.banner.imageBox.img}/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  arrow: {
    position: "relative",
    zIndex: 2,
    pt: "3px",
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [-1, null, -6, null, null, "40px", null, -3],
      img:{
        borderRadius: '6%',
        boxShadow: '5px 5px 10px #888888',
      },
    },
  },
};
