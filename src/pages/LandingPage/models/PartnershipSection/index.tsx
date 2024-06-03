import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";
import log1 from "/src/assets/log1.png";
import log2 from "/src/assets/log2.png";
import log3 from "/src/assets/log3.png";
import log4 from "/src/assets/log4.png";
import log5 from "/src/assets/log5.png";
import log6 from "/src/assets/log6.png";
import log7 from "/src/assets/log7.png";
import log8 from "/src/assets/log8.png";

export function PartnershipSection() {
  return (
    <Section className="bg-[#09204d] text-white">
      <div
        id="text-content"
        className="flex flex-col gap-6 items-center w-full"
      >
        <h1 className="text-white text-5xl font-semibold ">
          Coberturas de planos pra você e sua família.
        </h1>

        <div className="max-w-[600px] text-lg">
          <p className="text-justify " style={{ textAlignLast: "center" }}>
            Conte conosco na hora de escolher seu plano de saúde, confira abaixo
            nossas empresas parceiras. Temos o plano ideal pra você e sua
            família.
          </p>
        </div>
      </div>

      <div
        id="gallery"
        className="grid grid-cols-4 items-center justify-items-center gap-10 gap-y-20"
      >
        <Card.Secondary icon={<img src={log1} />} />
        <Card.Secondary icon={<img src={log2} />} />
        <Card.Secondary icon={<img src={log3} />} />
        <Card.Secondary icon={<img src={log4} />} />
        <Card.Secondary icon={<img src={log5} />} />
        <Card.Secondary icon={<img src={log6} />} />
        <Card.Secondary icon={<img src={log7} />} />
        <Card.Secondary icon={<img src={log8} />} />
      </div>

      <Button variant="whatsapp">
        <FaWhatsapp size={25} />
        <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
          FALE CONOSCO
        </a>
      </Button>
    </Section>
  );
}
