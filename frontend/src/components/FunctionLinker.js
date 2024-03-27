const FunctionLinker = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24.59999999999999px] max-w-full text-center text-base text-white font-rajdhani">
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left">
        <div className="w-[676.1px] flex flex-col items-start justify-start gap-[5.900000000000006px] max-w-full">
          {/* <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[16.500000000000057px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[29px] z-[2]">
                hud
              </div>
              <div className="flex flex-row items-start justify-start gap-[67.6px] max-w-[calc(100%_-_49px)] text-right mq450:flex-wrap mq450:gap-[67.6px_34px]">
                <div className="w-5 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[20px] z-[2]">
                  on
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[28.90000000000001px] pl-0 text-left">
                  <div className="relative tracking-[0.04em] uppercase font-medium z-[2]">
                    player respawn time
                  </div>
                </div>
                <div className="w-6 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[24px] z-[2]">
                  100
                </div>
              </div>
            </div>
          </div> */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.1999999999999886px] max-w-full text-right">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.10000000000005px] max-w-full">
              <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
              <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.200000000000017px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[2.799999999999983px] pr-6 pl-[16.500000000000057px] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0 text-left">
                    <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium inline-block min-w-[115px] z-[2]">
                      3p vehicle cam
                    </div>
                  </div>
                  <div className="w-[201.1px] flex flex-row items-start justify-start gap-[66.1px]">
                    <div className="w-5 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[20px] z-[2]">
                      on
                    </div>
                    <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium text-left inline-block min-w-[115px] z-[2]">
                      kick after idle
                    </div>
                  </div>
                  <div className="w-[27px] relative tracking-[0.04em] uppercase font-medium inline-block min-w-[27px] z-[2]">
                    300
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[2.799999999999983px] box-border gap-[3.1999999999999886px] max-w-full shrink-0">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.10000000000005px] max-w-full">
                  <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
                  <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[16.500000000000057px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
                    <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium text-left z-[2]">
                      regenerative health
                    </div>
                    <div className="w-[256.1px] flex flex-row items-start justify-start py-0 pr-[47px] pl-0 box-border gap-[66.1px] mq450:gap-[66.1px_33px] mq450:pr-5 mq450:box-border">
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[20px] z-[2]">
                        on
                      </div>
                      <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium text-left inline-block min-w-[123px] z-[2]">
                        ban after kicks
                      </div>
                    </div>
                    <div className="w-[9px] relative tracking-[0.04em] uppercase font-medium inline-block min-w-[9px] z-[2] mq825:w-full mq825:h-[9px]">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.10000000000005px] max-w-full shrink-0">
                <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
                <div className="h-px flex-1 relative box-border opacity-[0.1] min-w-[211px] max-w-full z-[2] border-t-[1px] border-solid border-white" />
              </div>
              <div className="w-[317px] flex flex-row items-start justify-start pt-0 pb-[2.6999999999999886px] pr-4 pl-[16.500000000000057px] box-border shrink-0 text-left">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[65px] z-[2]">
                    kill cam
                  </div>
                  <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                    on
                  </div>
                </div>
              </div>
              <div className="w-[324px] flex flex-col items-start justify-start pt-0 px-0 pb-[2.7000000000000455px] box-border gap-[3.3000000000000114px] max-w-full shrink-0 text-left">
                <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5.899999999999977px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.500000000000057px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[101px] z-[2]">
                        friendly fire
                      </div>
                      <div className="w-[26px] relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[26px] z-[2]">
                        off
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[3.1999999999999886px]">
                    <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.500000000000057px]">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium inline-block min-w-[90px] z-[2]">
                            3d spotting
                          </div>
                          <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                            on
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[3.1999999999999886px]">
                        <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.500000000000057px]">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="relative tracking-[0.04em] leading-[20.8px] uppercase font-medium z-[2]">
                              enemy name tags
                            </div>
                            <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                              on
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[325px] h-px relative box-border opacity-[0.1] max-w-full z-[2] border-t-[1px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
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
