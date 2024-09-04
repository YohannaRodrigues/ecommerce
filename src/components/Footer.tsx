import { FC } from "react";
import { Link } from "react-router-dom";
import { Facebook } from "../assets/header/Facebook";
import { Instagram } from "../assets/header/Instagram";
import { Twitter } from "../assets/header/Twitter";
import { Youtube } from "../assets/header/Youtube";

const Footer: FC = () => (
  <div className="bg-blue-500 text-white p-4 text-center mt-auto">
    <div>&copy; Copyright | All Rights Reserved</div>
    <div>
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
      <Link
        to="https://alim1496.github.io/"
        className="hover:underline hover:font-bold opacity-85 hover:opacity-100"
      >
        M A Alim
      </Link>
    </div>
  </div>
);

export default Footer;
