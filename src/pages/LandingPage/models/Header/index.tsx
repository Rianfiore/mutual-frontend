import mutualLogo from "@/assets/mutual-logo.png";
import { Button } from "@/components/atoms/Button";
import { FaWhatsapp } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex flex-col w-full items-center border-b-[1px] border-[#103787]">
      <nav className="flex w-full justify-center bg-white">
        <span className="flex w-full justify-between items-center max-w-[1140px] px-10 py-5">
          <figure className="flex items-center gap-3">
            <img src={mutualLogo} width={80} />
          </figure>

          <Button variant="whatsapp">
            <FaWhatsapp size={25} />
            <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
              FAÇA SUA SIMULAÇÃO
            </a>
          </Button>
        </span>
      </nav>
    </header>
  );
}
