import { CardSecondaryProps } from "./types";

export function CardSecondary({ icon, title }: CardSecondaryProps) {
  return (
    <div className="w-[200px] max-w-[200px] max-h-[200px] flex flex-col gap-6 p-5 items-center shadow-base rounded-xl bg-white">
      {icon}
      <h1 className="font-semibold text-xl text-center text-[#103787]">
        {title}
      </h1>
    </div>
  );
}
