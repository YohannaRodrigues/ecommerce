import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import { Logo } from "../assets/header/Logo";
import { Minicard } from "../assets/header/Minicard";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 cl-vinho top-0 sticky z-10 shadow-lg ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold" data-test="main-logo">
            <Logo />
          </Link>

          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Products
            </Link>
            <div className=" max-w-[100px]">busca</div>
            <div className="flex items-center gap-2">
              <div className=" text-2xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    <FaUser className=" text-2xl" />
                  </span>
                )}
              </div>
            </div>
            <div
              className=" text-[32px] relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <Minicard />
              <div
                className="absolute top-[-15px] right-[-10px]  w-[25px] h-[25px] rounded-full cl-vinho text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
