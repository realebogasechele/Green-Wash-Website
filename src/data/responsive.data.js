export default {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };