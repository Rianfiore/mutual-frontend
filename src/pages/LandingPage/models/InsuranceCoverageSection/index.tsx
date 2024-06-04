import { Family } from "@/assets/icons/Family";
import { Fire } from "@/assets/icons/Fire";
import { Mirror } from "@/assets/icons/Mirror";
import { Robber } from "@/assets/icons/Robber";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Section } from "@/components/templates/Section";
import { FaWhatsapp } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

export function InsuranceCoverageSection() {
  return (
    <Section className="bg-[#09204d] text-white">
      <div
        id="text-content"
        className="flex flex-col gap-6 items-center w-full"
      >
        <h1 className="text-white text-5xl font-semibold ">
          Coberturas que protegem seus bens.
        </h1>

        <div className="max-w-[600px] text-lg">
          <p className="text-justify " style={{ textAlignLast: "center" }}>
            As coberturas te indenizam se acontecer algum dano com o seu imóvel
            e com o que está dentro dele. Conheça as principais opções e
            contrate do jeito que você precisar!
          </p>
        </div>
      </div>

      <div
        id="gallery"
        className="grid grid-cols-3 items-center justify-items-center gap-10 gap-y-20"
      >
        <Card.Primary
          icon={<Fire width={50} height={100} />}
          title="Incêndio"
          description="Se o seu lar for atingido por fogo ou fumaça, seja por um acidente na sua casa ou na de vizinhos, você conta com uma indenização para repor o que foi danificado."
        />

        <Card.Primary
          icon={<MdElectricBolt size={100} color="orange" />}
          title="Danos Elétricos"
          description="A reposição de aparelhos eletrônicos e eletrodomésticos que queimarem por queda de raio ou oscilação de energia é garantida por essa cobertura."
        />

        <Card.Primary
          icon={<Robber width={100} height={100} />}
          title="Roubo ou Furto"
          subtitle="Subtração de bens"
          description="Em caso de roubo ou furto, essa cobertura ampara os itens da sua casa que forem perdidos ou danificados."
        />

        <Card.Primary
          icon={<Family width={100} height={100} />}
          title="Danos a terceiros"
          subtitle="Responsabilidade
          civil e familiar"
          description="Se você ou outro morador da residência acidentalmente causar um dano a alguém, como objetos quebrados em lojas ou vazamentos que contaminem vizinhos, o seguro cobre as despesas correspondentes."
        />

        <Card.Primary
          icon={<Mirror width={100} height={100} />}
          title="Quebra de vidros e espelhos"
          description="Se os vidros do seu box, ou janelas, espelhos, vidros da varanda e até cooktop quebrarem, essa cobertura garante a reposição desses itens. Vale até para louças sanitárias."
        />

        <div className="bg-white rounded-2xl px-6 py-8 text-[#103787] flex flex-col items-center justify-center gap-6 w-[80%] h-[380px]">
          <h1 className="text-xl font-semibold">FALE CONOSCO</h1>
          <p className="text-md text-center">
            Receba sua cotação com os melhores preços do mercado.
          </p>
          <Button variant="whatsapp" fontSize="sm">
            <FaWhatsapp size={25} />
            <a href="https://api.whatsapp.com/send?phone=5521990010075&text=Ol%C3%A1,%20eu%20vim%20pela%20LandPage%20e%20desejo%20mais%20informa%C3%A7%C3%B5es">
              COTAÇÃO ONLINE
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
