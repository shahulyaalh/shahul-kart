import Category from "../../components/Category/Category";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Hero from "../../components/Hero/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProduct />
      <NewsLetter />
      <OfferBanner />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
