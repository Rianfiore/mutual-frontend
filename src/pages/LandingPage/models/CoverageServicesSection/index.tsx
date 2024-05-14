import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Section } from "@/components/templates/Section";
import { BsTools } from "react-icons/bs";
import { FaClipboardList, FaWhatsapp } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";
import { IoKeySharp } from "react-icons/io5";
import { MdElectricMeter } from "react-icons/md";

export function CoverageServicesSection() {
  return (
    <Section className="bg-white">
      <span
        id="text-content"
        className="flex gap-2 flex-col items-center flex-wrap"
      >
        <div className="flex flex-col text-[#2F629B] text-4xl font-semibold">
          <h1>Serviços para sua comodidade</h1>
        </div>

        <p className="text-[#333] font-medium text-[18px]">
          Você pode contar com a assistência de profissionais especializados
          para pequenos consertos, manutenções e instalações.
        </p>
      </span>

      <span id="gallery" className="flex gap-8">
        <Card.Secondary
          title="Encanador"
          icon={<GiTeePipe size={84} color={"#2F629B"} />}
        />

        <Card.Secondary
          title="Eletricista"
          icon={<MdElectricMeter size={84} color={"#2F629B"} />}
        />

        <Card.Secondary
          title="Reparos em eletrodomésticos"
          icon={<BsTools size={65} color={"#2F629B"} />}
        />

        <Card.Secondary
          title="Chaveiro"
          icon={<IoKeySharp size={84} color={"#2F629B"} />}
        />

        <Card.Secondary
          title="E muitos outros serviços"
          icon={<FaClipboardList size={84} color={"#2F629B"} />}
        />
      </span>

      <Button variant="whatsapp">
        <FaWhatsapp size={25} />
        <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
          COTAÇÃO ONLINE
        </a>
      </Button>
    </Section>
  );
}
