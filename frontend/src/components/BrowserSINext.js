const BrowserSINext = ({ browserSINextImageW, dawnbreaker }) => {
  return (
    <div className="h-[178px] flex flex-col items-start justify-start pt-0 px-0 pb-[36.40000000000009px] box-border relative gap-[21.59999999999991px] max-w-full text-left text-lgi text-white font-rajdhani">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-500" />
      <img
        className="self-stretch h-[76px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={browserSINextImageW}
      />
      <div className="w-[305.7px] flex flex-row items-start justify-start py-0 pr-6 pl-[23.700000000000728px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start">
          <b className="self-stretch h-[22px] relative tracking-[0.04em] leading-[22px] uppercase inline-block">
            conquest large
          </b>
          <b className="self-stretch h-[22px] relative tracking-[0.04em] leading-[22px] uppercase inline-block">
            {dawnbreaker}
          </b>
        </div>
      </div>
    </div>
  );
};

export default BrowserSINext;
