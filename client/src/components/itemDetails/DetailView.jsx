import { useState, useEffect } from 'react';

import { styled, Box, Typography, Grid } from '@mui/material';

import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productAction';

const Component = styled(Box)`
 display: flex;
    margin-top: 55px;
    background: #F2F2F2;
    width: 100%;
`;

const Container = styled(Grid)(({ theme }) => ({
     display: 'flex',
    background: '#FFFFFF',
    width: '100%',
  
    [theme.breakpoints.down('md')]: {
        margin: 0,
        flexDirection:'column'
    }
}))

// const RightContainer = styled(Grid)`
//     // margin-top: 50px;
//     // margin-left: 50px;
//     width:'60%',
//     & > p {
//         margin-top: 10px;
//     }
// `;
const RightContainer = styled(Grid)(({ theme }) => ({
  width: '60%',
  padding:'20px',

  '& > p': {
    marginTop: 10,
  },

  // Correct media query usage
  [theme.breakpoints.down('md')]: {
    margin: 0,
    flexDirection: 'column',
    width: '100%',
  },
}));

const ImgGrid = styled(Grid)(({ theme }) => ({
     display: 'flex',
       width:'40%',
       justifyContent:'center',
  
    [theme.breakpoints.down('md')]: {
        margin: 0,
        flexDirection:'column',
         width:'100%',
         paddingLeft:'20px',
         paddingRight:'20px'
    }
})) 
const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);

    return (
        <Component>
            { product && Object.keys(product).length &&
                <Container container > 
                    <ImgGrid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </ImgGrid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }   
        </Component>
    )
}

export default DetailView;