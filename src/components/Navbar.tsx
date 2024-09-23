import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import { Minicard } from "../assets/header/Minicard";
import Search from "./Search/Search";
import { Logo } from "../assets/header/Logo";

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
    <div className="text-slate-100 uppercase absolute w-full z-10">
      <div className="mx-auto p-[2%]">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="text-base font-bold flex items-center"
              data-test="main-logo"
            >
              COF
              <Logo />
              MUNDI
            </Link>
            FUTURO MENU
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Products
            </Link>{" "}
            <div className=" max-w-[100px]">
              <Search />
            </div>
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
                className="absolute top-[-15px] right-[-10px]  w-[25px] h-[25px] rounded-full text-slate-100 text-[14px] grid place-items-center"
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
