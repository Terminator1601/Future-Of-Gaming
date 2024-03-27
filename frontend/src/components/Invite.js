const Invite = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px pb-[0.1999999999999318px] pr-[0.8999999999999773px] pl-px gap-[35.10000000000002px] z-[2]">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/home--squad@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[0.10000000000002274px] pr-px pl-0 gap-[18.69999999999999px]">
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
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[18.80000000000001px]">
        <div className="w-[11px] h-[11px] relative rounded-[50%] box-border shrink-0 [debug_commit:f6aba90] border-[0px] border-solid border-white" />
        <img
          className="w-[49.1px] h-[50px] relative object-contain shrink-0 [debug_commit:f6aba90]"
          loading="lazy"
          alt=""
          src="/friend-profile-pic-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Invite;
