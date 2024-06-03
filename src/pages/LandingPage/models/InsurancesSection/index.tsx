import { Fleet } from "@/assets/icons/Fleet";
import { Motocycle } from "@/assets/icons/Motocycle";
import { Truck } from "@/assets/icons/Truck";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";

export function InsurancesSection() {
  return (
    <Section className="bg-[#09204d] text-white">
      <div
        id="gallery"
        className="grid grid-cols-3 items-center justify-items-center gap-10 gap-y-20"
      >
        <Card.Primary
          icon={<Motocycle width={100} height={100} />}
          title="Seguro de Moto"
          description="Que tal garantir sua tranquilidade com nosso seguro de moto? Oferecemos segurança, assistência rápida em emergências, e cobertura completa contra roubo e danos. Conte conosco para proteger sua moto!"
        />

        <Card.Primary
          icon={<Truck width={120} height={100} />}
          title="Seguro de Caminhão"
          description="Considere nosso seguro de caminhão para sua tranquilidade. Com ampla cobertura contra roubo e danos e assistência rápida em emergências, estamos prontos para proteger seu caminhão e oferecer segurança no seu dia a dia."
        />

        <Card.Primary
          icon={<Fleet width={100} height={100} />}
          title="Seguro de Frotas"
          description="Pense na tranquilidade que nosso seguro de frotas pode oferecer. Garantimos segurança abrangente, assistência rápida em emergências e cobertura contra roubos e danos, cuidando de todos os seus veículos com eficiência e confiança."
        />
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
