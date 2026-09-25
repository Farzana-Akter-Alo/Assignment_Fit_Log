import Image from "next/image";
import FooterImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-5 mt-14 shadow-gray-600 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={FooterImg}
              alt="Logo"
              width={30}
              height={20}
              className="-rotate-225"
            />
            <p className="text-md sm:text-lg font-bold text-white">FITLOG</p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-300 sm:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}
