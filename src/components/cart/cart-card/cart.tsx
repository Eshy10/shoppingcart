import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/cartSlice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 type ProductList = {
    items: {
        id: number,
        image: string,
        title: string,
        amount: number,
    }
}

const ItemCard = ({items}: ProductList) => {
    const dispatch = useAppDispatch();

    const addCartItems = (item: typeof items) => {
      dispatch(addToCart(item));
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={items.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addCartItems(items)} size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
