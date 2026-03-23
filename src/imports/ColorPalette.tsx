function Color() {
  return <div className="bg-[#0a0d12] h-[976px] rounded-[1000px] shrink-0 w-[204px]" data-name="color" />;
}

function Color1() {
  return <div className="bg-[#0074a9] h-[976px] rounded-[1000px] shrink-0 w-[204px]" data-name="color" />;
}

function Color2() {
  return <div className="bg-white h-[976px] rounded-[1000px] shrink-0 w-[204px]" data-name="color" />;
}

export default function ColorPalette() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="color-palette">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Color />
      <Color1 />
      <Color2 />
    </div>
  );
}