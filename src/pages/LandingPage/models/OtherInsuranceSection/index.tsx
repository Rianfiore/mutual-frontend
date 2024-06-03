import { Button } from "@/components/atoms/Button";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";
import apartment from "/src/assets/apartment.jpg";
import house from "/src/assets/house.jpg";
import keys from "/src/assets/keys.jpg";

export function OtherInsuranceSection() {
  return (
    <Section className="bg-white text-[#09204d]">
      <div
        id="text-content"
        className="flex flex-col gap-6 items-center w-full"
      >
        <h1 className="text-5xl text-center font-semibold ">
          Conheça também nossos outros serviços feito pra você.
        </h1>
      </div>

      <div
        id="gallery"
        className="grid grid-cols-3 items-center justify-items-center gap-10 gap-y-20"
      >
        <figure className="rounded-xl overflow-hidden shadow-md bg-[#09204d] min-h-[550px]">
          <img src={house} alt="Casa" />

          <h1 className="p-4 text-white text-lg">
            Que tal contar com nosso seguro fiança para sua tranquilidade?
            Garantimos segurança no aluguel, cobrindo possíveis inadimplências e
            protegendo seu patrimônio.
          </h1>
        </figure>
        <figure className="rounded-xl overflow-hidden shadow-md bg-[#09204d] min-h-[550px]">
          <img src={apartment} alt="Apartamento" />

          <h1 className="p-4 text-white">
            Garanta a tranquilidade do seu condomínio com nosso seguro
            especializado. Oferecemos cobertura completa contra incêndios,
            roubos e danos, além de assistência rápida em emergências. Proteja
            seu patrimônio com segurança e confiança.
          </h1>
        </figure>
        <figure className="rounded-xl overflow-hidden shadow-md bg-[#09204d] min-h-[550px]">
          <img src={keys} alt="Residência" />

          <h1 className="p-4 text-white">
            Proteja seu lar com nosso seguro residencial. Seja um apartamento,
            casa, casa de veraneio ou imóvel desocupado, oferecemos cobertura
            abrangente contra incêndios, roubos e danos, garantindo sua
            tranquilidade onde quer que esteja.
          </h1>
        </figure>
      </div>

      <Button variant="whatsapp">
        <FaWhatsapp size={25} />
        <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
          COTAÇÃO ONLINE
        </a>
      </Button>
    </Section>
  );
}
