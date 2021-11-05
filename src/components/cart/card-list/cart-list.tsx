import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCard from "../cart-card/cart";
import { useAppSelector } from '../../../redux/hooks';


const ItemList = () => {
    const products = useAppSelector(state => state.products)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <ItemCard items={item}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ItemList;
