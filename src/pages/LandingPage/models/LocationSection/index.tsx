import { Section } from "@/components/templates/Section";
import { FaMapMarkerAlt } from "react-icons/fa";

export function LocationSection() {
  return (
    <Section className="w-full p-0" fullWidth>
      <span className="flex flex-col gap-10 w-full items-center">
        <h1 className="text-white text-4xl font-semibold absolute bg-[#12304e] p-3 rounded-b-lg shadow-lg flex items-center gap-3">
          Localização
          <FaMapMarkerAlt size={30} />
        </h1>

        <div className="w-full h-[400px] rounded-lg flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.6512506088561!2d-43.277704409067695!3d-22.902210723925453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dba1aa5f141%3A0x13c718d816fb0173!2sR.%20Arquias%20Cordeiro%2C%20296%20-%20303%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020770-000!5e0!3m2!1spt-BR!2sbr!4v1712091223753!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{ border: 0, width: "100%", height: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </span>
    </Section>
  );
}
