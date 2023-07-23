/* eslint-disable no-unused-vars */
import React from 'react';
import rightBoxImage from "../../assets/images/ReadingBook.png";
import Text from '../../reasuble/Text';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    return (
        <header className='w-full'>
            <div className="container px-3 lg:px-[40px] m-auto rounded-[10px] mt-[20px] mb-[50px]">
                <div className="grid grid-cols-12 gap-6 bg-[#B9E6FF] lg:rounded-[10px] rounded-[5px]">
                    <div className="col-span-7 w-full">
                        <div className="left-box px-[5px] lg:px-[46px] flex items-center justify-center lg:justify-start lg:h-full h-full w-full py-20px">
                            <div>
                                <Text class="text-[#1F1A2D] text-[7px] lg:text-[20px] font-bold" text={t("text.Heaader")} />
                                <Text class="text-[#333] text-[5px] lg:text-[20px] font-normal my-[5px] lg:my-[20px]" text={t("text.Heaader1")} />
                                <button className='text-[#fff] text-[5px] lg:text-[20px] font-bold py-[5px] px-[10px] lg:py-[12px] lg:px-[32px] inline-flex justify-center items-center gap-10px rounded-[5px] bg-[#1F1A2D]'>{t("text.Heaader2btn")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="right-box overflow-hidden">
                            <img className='w-full h-full mt-5' src={rightBoxImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
