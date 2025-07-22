import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//component
import {navData} from '../../contants/data'

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'hidden',
    
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;


const NavBar=()=>{
   return ( 
   <Box style={{background:'#fff',}}>
     <Component>
            {
                navData.map((temp, index)=> (
                    <Container key={index}>
                        <img src={temp.url} style={{  width: 64 }} alt=" " />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
</Box>
       
    )

}

export default NavBar;