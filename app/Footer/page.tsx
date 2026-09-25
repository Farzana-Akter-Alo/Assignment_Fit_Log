import Image from "next/image";
import FooterImg from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="flex gap-2 items-center">
            <Image
              src={FooterImg}
              alt="Logo"
              width={30}
              height={20}
              className="-rotate-225"
            />
            <p className="text-white font-bold text-lg">FITLOG</p>
          </div>
          <p className="text-gray-300 text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}
