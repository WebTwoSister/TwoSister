export default function NameTitle({ name }: { name?: string }) {
  return (
    <p className="text-[1.5rem] text-white underline decoration-solid decoration-2 decoration-[#F88944] underline-offset-8">
      {name || "Cleaning Service"}
    </p>
  );
}
