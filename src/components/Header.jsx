import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "/src/img/header-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg py-4"
    >
      <div className="flex justify-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 sm:h-16 transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
