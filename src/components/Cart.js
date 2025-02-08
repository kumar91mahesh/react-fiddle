import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
const cartItems = useSelector((state)=> state.cart.items);
const dispatch = useDispatch();
const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <p>Cart is Empty</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;