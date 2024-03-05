import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import CustomPopup from "./CustomPopup";
import { Twitter } from "../assets/header/twitter";
import { Facebook } from "../assets/header/Facebook";
import { Instagram } from "../assets/header/Instagram";
import { Youtube } from "../assets/header/Youtube";

const TopBar: FC = () => {
  const dispatch = useAppDispatch();

  const username = useAppSelector((state) => state.authReducer.username);

  return (
    <div className="py-2 bg-custom top-0 z-10 font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="mr-8" data-test="social-twitter">
              <Twitter />
            </Link>
            <Link to="/" className="mr-8" data-test="social-facebook">
              <Facebook />
            </Link>
            <Link to="/" className="mr-8" data-test="social-instagram">
              <Instagram />
            </Link>
            <Link to="/" className="mr-8" data-test="social-youtube">
              <Youtube />
            </Link>
          </div>

          <div>
            <p className="color-rosa-escuro font-bold">
              Frete grátis a partir de R$50.00{" "}
            </p>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="border-solid border-2 rounded-lg fundo-color-rosa-claro border-transparent px-3 shadow-md flex items-center gap-2">
              <div className="text-basel">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85 text-slate-50"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Sing Up
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
