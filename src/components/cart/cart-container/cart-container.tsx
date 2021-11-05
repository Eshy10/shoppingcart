import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { addToCart, removeFromCart } from "../../../redux/cartSlice";
import { DataList } from "../../../redux/actionTypes"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CartItems = () => {
  // The `state` arg is correctly typed as `RootState` already
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addCartItems = (item: DataList) => {
    dispatch(addToCart(item));
  };

  const removeCartItems = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getTotal = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.amount,
      0
    );
  };

  return (
    <>
      {cart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={item.image} alt={item.title} />
                  </TableCell>
                  <TableCell align="right">{item.title}</TableCell>
                  <TableCell align="right">
                    <div
                    style={{cursor: "pointer"}}
                      className="arrow"
                      onClick={() => addCartItems(item)}
                    >
                     +
                    </div>
                    {item.quantity}
                    <div
                    style={{cursor: "pointer"}}
                      className="arrow"
                      onClick={() => removeCartItems(item.id)}
                    >
                     -
                    </div>
                  </TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                  <TableCell align="right">                    <div
                    style={{cursor: "pointer"}}
                      className="arrow"
                      onClick={() => removeCartItems(item.id)}
                    >
                     *
                    </div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h2 >Total: N {getTotal()}</h2>
        </TableContainer>
      ) : (
        <h1 style={{color: "white"}}>Cart is Empty</h1>
      )}
    </>
  );
};

export default CartItems;
