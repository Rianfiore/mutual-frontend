import { SectionProps } from "./types";

export function Section({ fullWidth = false, ...props }: SectionProps) {
  const { className, ...rest } = props;
  return (
    <section
      className={`p-24 w-full flex flex-col items-center ${className}`}
      {...rest}
    >
      <div
        data-fullwidth={fullWidth}
        className="w-full data-[fullWidth=false]:max-w-[1140px] flex flex-col items-center gap-20"
      >
        {props.children}
      </div>
    </section>
  );
}
