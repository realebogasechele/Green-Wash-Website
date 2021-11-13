import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import About from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import ContactUs from 'sections/contact-us';
import Gallery from 'sections/gallery';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="The Green Wash" />
          <Banner />
          <About />
          <ServiceSection />
          <WorkFlow />
          <TeamSection />
          <Package />
          <Gallery />
          <Feature />
          <ContactUs />
          {/* <TestimonialCard /> */}
        </Layout>
    </ThemeProvider>
  );
}
