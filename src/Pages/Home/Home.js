import useTitle from "../../Hooks/UseTitle/useTitle";
import AllPoducts from "./AllProducts/AllPoducts";
import Banner from "./Banner/Banner";
import ProductCategory from "./ProductCategory/ProductCategory";



const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <AllPoducts></AllPoducts>
    </div>
  );
};

export default Home;
