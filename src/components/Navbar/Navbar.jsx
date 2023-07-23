import { useState } from "react";
import { n1, n2, logo } from "../../assets/img";
import { MyButton } from "../../utils/Constants";
import SelectTransla from "../ResobleTranslate/TranslateSection";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [style, setStyle] = useState("translateX(-100%)")
  return (
    <>
      <div style={{ transform: style }} className="lg:w-[300px] w-[200px] bg-[#1F1A2D] transition-all bg-opacity-[0.8] border-light-500 h-full border-[2px] fixed bottom-0 left-0">
        <div className="flex justify-end mb-3">
          <button className="fa-solid fa-xmark text-light-50 border py-2 px-3 text-[26px]" onClick={() => setStyle("translateX(-100%)")}></button>
        </div>
        <div className="lg:hidden xl:hidden 2xl:hidden block md:none sm:block mb-2">
          <SelectTransla />
        </div>
        {MyButton?.map((item, index) => {
          return (
            <button
              key={index}
              className="inline my-2 mx-2 text-light-500 lg:text-[26px] text-[16px] py-6px px-14px rounded-[10px] border border-light-50 sm:inline"
            >
              {t(item?.name)}
            </button>
          );
        })}
      </div>
      <nav className="container mx-auto mt-5 px-[40px] overflow-hidden py-[10px] lg:block hidden md:hidden block">

        <div className="flex mb-[5px]">
          <img className="lo cursor-pointer" src={logo} alt="" />
          <button className="ml-[24px] mr-[124px] inline-flex h-[45px] w-[114px] items-center mt-1 justify-center gap-2 whitespace-nowrap rounded border border-gray-500 px-6 text-sm font-medium tracking-wide text-light-500 transition duration-300 hover:border-light-600 hover:text-light-600 focus:border-light-700 focus:text-light-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-light-300 disabled:text-light-300 disabled:shadow-none" onClick={() => setStyle("translateX(0)")}>
            <span>{t("text.katalog")}</span>
          </button>
          <input
            className="none mr-50px w-[505px] mt-1 h-[45px] bg-color-[#2B2244] pl-10 rounded-[5px] text-10"
            type="text"
            placeholder={t("text.qidir")}
          />
          <SelectTransla />
          <img className="none ml-[78px] mr-[40px] cursor-pointer" src={n1} alt="" />
          <img className="none cursor-pointer" src={n2} alt="" />
          <button className="none w-[107px] h-[45px] mt-1 rounded-[5px] text- bg-light-700 ml-[40px]">
            {t("text.kirish")}
          </button>
        </div>

        <center className="mt-[20px] flex justify-center overflow-hidden">
          {MyButton?.map((item, index) => {
            return (
              <button
                key={index}
                className="text-light-500 mx-[5px] text-[13px] pt-[6px] pl-[14px] pb-[6px] pr-[14px] rounded-[10px] border border-light-50 "
              >
                {t(item?.name)}
              </button>
            );
          })}
        </center>
      </nav>
      <nav className="lg:hidden block md:block md:justify-between sm:justify-between container mt-[16px]">
        <div className="flex justify-around md:ml-36 md:mr-14 md:flex md:justify-between">
          <div className="flex gap-2">
            <img className="w-[89px] h-[34px]" src={logo} alt="" />
            <button className="w-[40px] h-[34px] border rounded-[10px]" onClick={() => setStyle("translateX(0)")}>
              <i className="fa-solid fa-bars text-light-600"></i>
            </button>
          </div>
          <div className="flex gap-2 mt-1">
            <i className="fa-sharp fa-solid fa-magnifying-glass w-[24px] h-[24px] text-light-700"></i>
            <i className="fa-regular fa-bookmark text-light-700 w-[24px] h-[24px]"></i>
            <i className="fa-solid fa-cart-shopping text-light-700"></i>
            <i className="fa-regular fa-user text-light-800"></i>
          </div>
        </div>
      </nav>
        <center className="mt-[20px] md:mt-10 flex overflow-hidden overflow-x-auto 2xl:hidden block md:hidden block ml-5 mr-10">
          {MyButton?.map((item, index) => {
            return (
              <button  
                key={index}
                className="text-light-500 mx-[5px] text-[13px] pt-[6px] pl-[14px] pb-[6px] pr-[14px] rounded-[10px] border border-light-50 "
              >
                {t(item?.name)}
              </button>
            );
          })}
        </center>
    </>
  );
};

export default Navbar;
