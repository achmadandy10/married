import { FC } from "react";
import { FaFacebook, FaEnvelope, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa"
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer className="md:px-24 py-5 bg-yellow-900 flex items-center justify-between">
      <div className="grid gap-4">
        <h3 className="text-3xl font-bold text-white">Kelompok 5</h3>
        <span className="font-medium flex items-center gap-2"><FaCopyright /> 2022 Married.id</span>
      </div>
      <div className="flex items-center gap-6">
        <Link to="#">
          <FaFacebook className="text-white w-5 h-5"/>
        </Link>
        <Link to="#">
          <FaEnvelope className="text-white w-5 h-5"/>
        </Link>
        <Link to="#">
          <FaTwitter className="text-white w-5 h-5"/>
        </Link>
        <Link to="#">
          <FaInstagram className="text-white w-5 h-5"/>
        </Link>
      </div>
    </footer>
  )
}