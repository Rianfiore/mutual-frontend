import { Button } from "@/components/atoms/Button";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";

export function HealthInsuranceSection() {
  return (
    <Section className="bg-[url('/src/assets/bg-hero-3.jpg')] bg-inherit bg-no-repeat bg-right max-2xl:bg-contain">
      <div className="max-w-[400px] flex flex-col gap-5 self-start">
        <h3 className="text-[#103787] text-[20px] font-bold">
          PLANOS DE SAÚDE
        </h3>
        <h1 className=" text-[#2F629B] text-[42px] font-bold leading-9">
          Sua saúde em primeiro lugar.
        </h1>
        <p className="text-[#333A46] text-[22px]">
          Garanta as melhores condições pra você e sua família na hora de
          escolher um plano de saúde.
        </p>

        <Button variant="whatsapp">
          <FaWhatsapp size={25} />
          <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
            FALE CONOSCO
          </a>
        </Button>
      </div>
    </Section>
  );
}
