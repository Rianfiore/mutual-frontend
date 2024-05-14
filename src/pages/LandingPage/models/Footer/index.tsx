import mutualLogo from "@/assets/mutual-logo.png";
import { Button } from "@/components/atoms/Button";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-white text-[#12304e] flex flex-col items-center justify-center p-6 gap-4">
      <span className="w-full max-w-[1140px] flex justify-center items-center gap-16">
        <span className="flex flex-col items-center">
          <figure>
            <img src={mutualLogo} width={80} />
          </figure>

          <span className="text-sm text-center">
            <p>(21) 3197-0205</p>
            <p>(21) 99001-0075</p>
          </span>
        </span>

        <div>
          <p>Rua Arquias Cordeiro, n 296, sala 303 - Méier</p>
        </div>

        <span className="flex flex-col items-center gap-4">
          <span className="flex gap-2">
            <a
              href="https://www.instagram.com/novamutualcorretora?igsh=M3QwZGo1ZXZzcDFy"
              target="_blank"
            >
              <FaInstagram
                size={30}
                className="hover:scale-105 hover:cursor-pointer active:scale-90"
              />
            </a>
            <a href="https://www.facebook.com/mutualcorretora" target="_blank">
              <FaFacebook
                size={30}
                className="hover:scale-105 hover:cursor-pointer active:scale-90"
              />
            </a>
          </span>

          <Button variant="whatsapp" className="text-xs">
            <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
              CONTATO
            </a>
          </Button>
        </span>
      </span>

      <p>© 2024 Copyright - Mutual - Corretora de Seguros</p>
    </footer>
  );
}
