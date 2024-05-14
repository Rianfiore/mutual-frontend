import { CardPrimaryProps } from "./types";

export function CardPrimary({
  title,
  subtitle,
  description,
  icon,
}: CardPrimaryProps) {
  return (
    <div
      id="card"
      className="flex flex-col items-center gap-4 bg-white rounded-2xl text-[#103787] px-6 py-4 w-[80%] h-[380px]"
    >
      {icon}

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-center">{title}</h1>
          {subtitle && <h2 className="text-sm text-center">{subtitle}</h2>}
        </div>

        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
}
