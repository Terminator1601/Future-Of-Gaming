const Invite = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px px-px pb-[0.1999999999998181px] gap-[35.09999999999991px] z-[2]">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/home--squad@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[0.09999999999990904px] pr-px pl-0 gap-[18.700000000000273px]">
        <img
          className="w-[11px] h-[11px] relative"
          loading="lazy"
          alt=""
          src="/online.svg"
        />
        <img
          className="w-[49.1px] h-[50px] relative object-contain"
          loading="lazy"
          alt=""
          src="/friend-profile-pic@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[4.547473508864641e-13px] pr-px pl-0 gap-[18.799999999999727px]">
        <div className="w-[11px] h-[11px] relative rounded-[50%] box-border border-[0px] border-solid border-white" />
        <img
          className="w-[49.1px] h-[50px] relative object-contain"
          loading="lazy"
          alt=""
          src="/friend-profile-pic-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Invite;
