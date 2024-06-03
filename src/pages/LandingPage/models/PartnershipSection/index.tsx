import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";

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
        <Card.Secondary icon={<img src="/src/assets/log1.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log2.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log3.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log4.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log5.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log6.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log7.png" />} />
        <Card.Secondary icon={<img src="/src/assets/log8.png" />} />
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
