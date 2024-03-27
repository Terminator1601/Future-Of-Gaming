const FunctionLinker = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24.59999999999999px] max-w-full text-center text-base text-white font-rajdhani">
      <div className="w-[90.6px] h-[22px] flex flex-row items-start justify-start py-[3px] px-0 box-border z-[3]">
        <img
          className="h-4 w-4 relative"
          loading="lazy"
          alt=""
          src="/sidemenu--help.svg"
        />
        <div className="h-[22px] bg-gray-400 hidden flex-row items-center justify-center py-px px-2 box-border">
          <div className="self-stretch relative tracking-[0.04em] uppercase font-medium whitespace-nowrap">
            help
          </div>
        </div>
      </div>
      <div className="w-[87px] h-[22px] flex flex-row items-start justify-start py-[3px] px-0 box-border z-[3]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/sidemenu--quit.svg"
        />
        <div className="h-[22px] bg-gray-400 hidden flex-row items-center justify-center py-px px-2 box-border">
          <div className="self-stretch relative tracking-[0.04em] uppercase font-medium whitespace-nowrap">
            Quit
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionLinker;
