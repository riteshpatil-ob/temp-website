import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import LogoDark from "@/assets/images/logo-dark.png";

const NAV_ITEMS = [
  {
    title: "Products",
  },
  {
    title: "Use Cases",
  },
  {
    title: "Pricing",
  },
  {
    title: "Developers",
  },
  {
    title: "Resources",
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => setOpen((c) => !c);

  return (
    <>
      <div className="fixed w-screen p-5 flex justify-between items-center bg-white z-50">
        <Image src={LogoDark} alt="One Bharat" className="w-28 h-auto" />

        <FiMenu className={"text-md cursor-pointer"} onClick={handleMenuOpen} />
      </div>

      {open && (
        <nav className="w-screen h-screen fixed top-0 left-0 bg-white z-40 flex flex-col items-center justify-center">
          {NAV_ITEMS.map(({ title }) => (
            <p key={title} className="text-base mb-8">
              {title}
            </p>
          ))}
        </nav>
      )}
    </>
  );
};

export default MobileNavbar;
