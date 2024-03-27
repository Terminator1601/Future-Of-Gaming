import Invite from "../components/Invite";
import FunctionLinker from "../components/FunctionLinker";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import "../local.css";
// import axios from 'axios';

const MenuMultiplayerServerBrow = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/settings/basic");
      const settingsData = await response.json();
      setApiData(settingsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [advancedSettings, setAdvancedSettings] = useState(null);

  useEffect(() => {
    fetchAdvancedSettings();
  }, []);

  const fetchAdvancedSettings = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/settings/advanced"
      );
      const advancedData = await response.json();
      setAdvancedSettings(advancedData);
    } catch (error) {
      console.error("Error fetching advanced settings:", error);
    }
  };

  const [rulesData, setRulesData] = useState([]);

  useEffect(() => {
    fetchRulesData();
  }, []);

  const fetchRulesData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/settings/rulesData"
      );
      const data = await response.json();
      setRulesData(data.settings); // Assuming data structure includes a 'settings' property
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="w-full relative  bg-white overflow-hidden flex flex-col items-start justify-start pt-[36.200000000000045px] px-[3px] pb-[53px] box-border gap-[3.19999999999996px] tracking-[normal] text-left text-[46px] text-white font-rajdhani">
      <div className="w-[6297.4px]  h-[3542.3px] absolute !m-[0] bottom-[-1593.8px] left-[-2241.1px] z-[1] flex items-center justify-center">
        <img
          className="w-full hover:brightness-200 h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.017)]"
          alt=""
          src="/menu--background@2x.png"
        />
      </div>
      <div className="w-px h-[calc(100%_+_1px)] absolute !m-[0] top-[0px] bottom-[-1px] left-[87.6px] box-border z-[2] border-r-[1px] border-solid border-gray-100" />
      <div className="w-[1888px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq1400:flex-wrap">
        <div className="w-[1290.4px] flex flex-row items-start justify-start gap-[68.79999999999995px] max-w-full mq450:gap-[68.8px_17px] mq825:gap-[68.8px_34px]">
          <div className="h-[595.8px] w-[58.1px] flex flex-col items-start justify-start pt-[171.69999999999993px] px-0 pb-0 box-border mq825:hidden mq825:pt-28 mq825:box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[16.166666666666675px]">
              <img
                className="w-10 hover:brightness-150 h-12 relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/sidemenu@2x.png"
              />
              <img
                className="w-10 hover:brightness-150 h-12 relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/sidemenu-1@2x.png"
              />
              <div className="self-stretch h-12 relative z-[2]">
                <img
                  className="absolute hover:brightness-150 h-full w-[68.85%] top-[0%] right-[0%] bottom-[0%] left-[31.15%] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/sidemenu--game@2x.png"
                />
                <div className="absolute h-[106.25%] w-[5.16%] top-[0%] right-[94.84%] bottom-[-6.25%] left-[0%] box-border border-r-[3px] border-solid border-orange" />
              </div>
              <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[19px] gap-[19.89999999999999px]">
                <img
                  className="w-10 hover:brightness-150 h-12 relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/sidemenu-2@2x.png"
                />
                <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[8.000000000000014px]">
                  <img
                    className="h-10 hover:brightness-150 w-10 relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/sidemenu-3@2x.png"
                  />
                </div>
                <div className="h-11 flex flex-row items-start justify-end pt-0 pb-[11.70000000000001px] pr-[3.800000000000068px] pl-1 box-border">
                  <img
                    className="h-[32.3px] hover:brightness-150 w-[32.3px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/sidemenu-4.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-1">
                  <div className="h-[31.9px] w-8 relative z-[2]">
                    <div className="absolute  h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0.5]">
                      <div className="absolute h-[50.16%] hover:brightness-150 w-full top-[0%] right-[0%] bottom-[49.84%] left-[0%] bg-white" />
                      <div className="absolute h-[12.54%] hover:brightness-150 w-full top-[62.7%] right-[0%] bottom-[24.76%] left-[0%] bg-white" />
                      <div className="absolute h-[12.54%] hover:brightness-150 w-full top-[87.77%] right-[0%] bottom-[-0.31%] left-[0%] bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.684341886080803e-14px] box-border gap-[79.90000000000003px] max-w-[calc(100%_-_127px)] mq825:gap-[20px_79.9px] mq825:max-w-full mq1400:gap-[40px_79.9px]">
            <div className="w-[356.4px] flex flex-row items-start justify-start py-0 pr-px pl-[1.1000000000000227px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[16.3px] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[212px] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[25.799999999999955px] shrink-0 [debug_commit:f6aba90]">
                    <div className="h-[22.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.399999999999977px] box-border">
                      <img
                        className="w-[7.2px] h-[15.7px] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/back.svg"
                      />
                    </div>
                    <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[9.4px] text-left text-lg text-white font-rajdhani">
                      <div className="flex flex-col items-start justify-start pt-[4.7999999999999545px] pb-0 pr-[3px] pl-0">
                        <div className="flex flex-row items-start justify-start z-[3]">
                          <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[111px]">
                            multiplayer
                          </div>
                        </div>
                      </div>
                      <h3 className="m-0 relative text-5xl tracking-[0.06em] uppercase font-medium font-inherit text-gray-200 inline-block min-w-[12px] z-[3] mq450:text-lgi">
                        /
                      </h3>
                      <div className="flex flex-col items-start justify-start pt-[4.7999999999999545px] px-0 pb-0">
                        <div className="h-[23px] relative tracking-[0.06em] uppercase font-semibold inline-block z-[3]">
                          server browser
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="h-[54.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                    <h1 className="mt-[-4.900000000000091px] m-0 h-[59px] relative text-inherit tracking-[0.03em] uppercase font-semibold font-inherit inline-block shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-[28px] mq825:text-[37px]">
                      server info
                    </h1>
                  </div>
                </div>
                <h3 className="m-0 relative text-5xl tracking-[0.06em] uppercase font-medium font-inherit text-gray-200 inline-block min-w-[12px] z-[2] mq450:text-lgi">
                  /
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[25.999999999999982px] max-w-full shrink-0 text-lg">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[7.5px] box-border gap-[16.69999999999999px] max-w-full text-[36px]">
                <h1 className="m-0 h-[46px] relative text-inherit tracking-[0.06em] font-semibold font-inherit inline-block max-w-full z-[2] mq450:text-[22px] mq825:text-[29px]">
                  #1| NASA | Noobs Welcome | Conquest 40Hz
                </h1>
                <div className="flex flex-col items-start justify-start gap-[14.100000000000025px] max-w-full text-lg text-gray-200">
                  <div className="flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
                    <div className="relative tracking-[0.06em] leading-[23.2px] uppercase font-semibold z-[2]">
                      conquest large - siege of shanghai - normal - 40 hz
                    </div>
                  </div>
                  <div className="h-[46px] relative tracking-[0.03em] font-semibold inline-block z-[2]">
                    <p className="m-0">
                      Server protected by The_K-50 AntiCheat. Vip !Rules,
                      Questions, Request, Appeal, Visit us: www.epg.gg | Discord
                    </p>
                    <p className="m-0">https://discord.gg/3r5NK4d</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8.000000000000009px] max-w-full mq1125:flex-wrap">
                <div className="flex-1  flex flex-col items-start justify-start pt-0 px-0 pb-[1.4210854715202004e-14px] box-border gap-[27.200000000000003px] min-w-[211px] max-w-full">
                  <div class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.5px] box-border max-w-full">
                    <button class=" hover:bg-white text-white hover:text-black cursor-pointer border-none py-[16.5px] px-5 bg-transparent flex-1 flex flex-row items-start justify-center box-border relative max-w-full z-[2]">
                      <div class=" w-[39px] relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani  text-center inline-block min-w-[39px] ">
                        join
                      </div>
                      <div class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white"></div>
                    </button>
                  </div>

                  <div className="w-[286.1px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[73px] shrink-0 [debug_commit:f6aba90] z-[3]">
                        players
                      </div>
                      <div className="h-[29.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-11xl">
                        <div className="mt-[-8.900000000000006px] relative tracking-[0.06em] font-semibold inline-block min-w-[83px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-lg mq825:text-5xl">
                          64/64
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[39px] shrink-0 [debug_commit:f6aba90] z-[3]">
                        ping
                      </div>
                      <div className="h-[29.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-11xl">
                        <div className="mt-[-8.900000000000006px] relative tracking-[0.06em] font-semibold inline-block min-w-[71px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-lg mq825:text-5xl">
                          47ms
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[1.4210854715202004e-14px] box-border gap-[27.200000000000003px] min-w-[211px] max-w-full">
                  <button className="hover:bg-white text-white hover:text-black  cursor-pointer [border:none] py-[16.5px] px-5 bg-[transparent] self-stretch flex flex-row items-start justify-center relative z-[2]">
                    <div className=" w-[81px] relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani  text-center inline-block min-w-[81px]">
                      spectate
                    </div>
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white" />
                  </button>
                  <div className="w-[274px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[74.30000000000001px] whitespace-nowrap z-[3]">
                        tickrate
                      </div>
                      <div className="h-[38px] relative text-11xl tracking-[0.06em] font-semibold inline-block min-w-[76px] whitespace-nowrap z-[2] mt-[-8.9px] mq450:text-lg mq825:text-5xl">
                        60 Hz
                      </div>
                    </div>
                  </div>
                </div>
                <button className="hover:bg-white text-white hover:text-black  cursor-pointer [border:none] py-[16.5px] px-[74px] bg-[transparent] flex-[0.5432] flex flex-row items-start justify-start box-border relative min-w-[176px] max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                  <div className=" h-[23px] w-44 relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani  text-center inline-block">
                    join as commander
                  </div>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white" />
                </button>
                <div className="hover:bg-white text-white hover:text-black h-14 w-[166px] flex flex-row items-start justify-start pt-[16.5px] px-[44.79999999999998px] pb-[15.5px] box-border relative gap-[2.9px] z-[2]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] border-[1px] border-solid border-white" />
                  <img
                    className="h-6 w-6 relative min-h-[24px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/favorite.svg"
                  />
                  <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[46px] z-[1]">
                    13672
                  </div>
                </div>
              </div>
              <div className="overscroll-contain	w-[1027.9px] flex flex-row items-start justify-start gap-[27.84999999999998px] max-w-full mq1125:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[9.900000000000002px] min-w-[243px] max-w-full">
                  {apiData && (
                    <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                      <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[79px] shrink-0 [debug_commit:f6aba90] z-[2]">
                        {apiData.title}
                      </div>
                    </div>
                  )}
                  {apiData &&
                    apiData.settings.map((setting, index) => (
                      <div
                        key={index}
                        className="self-stretch flex flex-col items-start justify-start gap-[5.140000000000001px] shrink-0 [debug_commit:f6aba90] text-base"
                      >
                        <div className="hover:bg-white text-white hover:text-black self-stretch h-[25.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.899999999999999px] box-border gap-[5.9px] z-[2]">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.59999999999991px]">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[51px]">
                                {setting.label}
                              </div>
                              <div className="relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[87px]">
                                {setting.value}
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-px relative box-border opacity-[0.1] border-t-[1px] border-solid border-white" />
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[10.200000000000005px] min-w-[243px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                    <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[88px] z-[2]">
                      advanced
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col  items-start justify-start gap-[6px] text-base">
                    {advancedSettings &&
                      advancedSettings.settings.map((setting, index) => (
                        <div
                          key={index}
                          className="self-stretch flex flex-col items-start justify-start gap-[3.1999999999999993px]  hover:text-black"
                        >
                          <div className="hover:bg-white text-white hover:text-black self-stretch h-[25.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.899999999999999px] box-border gap-[5.9px] z-[2]">
                            <div className="self-stretch flex  flex-row items-start justify-start py-0 pr-[23px] pl-[16.500000000000057px]">
                              <div className="flex-1 flex flex-row hover:bg-white items-start justify-between gap-[20px]">
                                <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[62px] z-[2]">
                                  {setting.label}
                                </div>
                                <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                                  {setting.value}
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start justify-start gap-[10.200000000000005px] min-w-[243px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 pr-4 pl-[16.5px]">
                    <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[52px] whitespace-nowrap z-[2]">
                      rules
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5.959999999999998px] text-base">
                    {rulesData &&
                      rulesData.map((rule, index) => (
                        <div
                          key={index}
                          className="self-stretch flex flex-col items-start justify-start gap-[3.1999999999999993px]  hover:text-black"
                        >
                          <div className="hover:bg-white text-white hover:text-black self-stretch h-[25.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.899999999999999px] box-border gap-[5.9px] z-[2]">
                            <div className="self-stretch flex  flex-row items-start justify-start py-0 pr-[23px] pl-[16.500000000000057px]">
                              <div className="flex-1 flex flex-row hover:bg-white items-start justify-between gap-[20px]">
                                <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[62px] z-[2]">
                                  {rule.label}
                                </div>
                                <div className="w-5 text-yellow relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                                  {rule.value}
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[333.6px] w-[52px] flex flex-col items-start justify-start pt-[22.59999999999991px] px-0 pb-0 box-border">
          <Invite />
        </div>
      </div>
      <footer className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[-13.8px] left-[-20.4px] bg-gray-300 w-[1952.5px] h-[1113.3px] z-[1]" />
        <div className="absolute top-[1048.5px] left-[129.4px] [background:linear-gradient(180deg,_rgba(16,_16,_16,_0),_#00657b)] w-[1381.7px] h-[51px] z-[2]" />
        <img
          className="absolute top-[272.9px] left-[129.9px] w-4 h-2 z-[2]"
          loading="lazy"
          alt=""
          src="/germanyflag.svg"
        />
      </footer>
      <div className="w-[1185.3px] flex flex-row items-start justify-start py-0 pr-[30px] pl-[30.399999999999977px] box-border max-w-full">
        <FunctionLinker />
      </div>
    </div>
  );
};

export default MenuMultiplayerServerBrow;
