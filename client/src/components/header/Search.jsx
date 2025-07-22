import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from 'react';

import { List, ListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 400;
  background: #fff;
  border-radius: 5px;
  width: 35%;
  margin-left: 20px;
`;

const StyledInputBase = styled(InputBase)`
  margin-left: 10px;
  flex: 1;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const Search = () => {
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

  return (
    <StyledBox>
      <StyledInputBase 
      placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
/>
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
       {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </StyledBox>
  );
};
export default Search;
