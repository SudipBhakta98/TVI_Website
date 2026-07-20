import Hero from "../components/Hero";
import Services from "../components/Services";
import Capabilities from "../components/Capabilities";
import Quality from "../components/Quality";
import Facility from "../components/Facility";
import CustomerLogos from "../components/Customer";
import Product from "../components/Product";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Capabilities />
      <Facility />
      <Product/>
      <Quality />
      <CustomerLogos/>
    </>
  );
};

export default HomePage;
