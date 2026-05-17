export default function NameTitle({ name, color }: { name?: string; color?: string }) {
  return (
    <p className={`text-[1rem] md:text-[1.5rem] text-center md:text-start ${color || "text-white"} underline decoration-solid decoration-2 decoration-[#F88944] underline-offset-8`}>
      {name || "Cleaning Service"}
    </p>
  );
}
