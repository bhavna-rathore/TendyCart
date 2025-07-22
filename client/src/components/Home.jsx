//components
import { Box } from "@mui/material";
import Banner from "./home/Banner";
import NavBar from "./home/NavBar";
import { styled } from "@mui/material";
import { useEffect } from "react";
import Slide from "./home/Slide";
import MidSlide from "./home/MidSlide";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productAction";
import MidSection from "./home/MidSection";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
         <MidSlide products={products} />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <MidSection/>
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
                 <Slide
                    data={products} 
                    title='Top Deals on Acccessories'
                    timer={false} 
                    multi={true} 
                />
                
      </Component>
    </>
  );
};

export default Home;
