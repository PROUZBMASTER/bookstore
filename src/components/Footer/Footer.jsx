/* eslint-disable react/display-name */
import React from 'react';
import { logo } from "../../assets/img/index";
import Text from '../../reasuble/Text';
import {fText,isText,iText} from "../../utils/Constants"
import { useTranslation } from 'react-i18next';

const Footer = React.memo(() => {
    const { t } = useTranslation();
    return (

        <>
            <footer className='border-t-light-500 border-t-[0.5px] pt-[25px]'>
                <div className="container px-3 lg:px-[40px] m-auto rounded-[10px] mt-[20px] mb-[50px]">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="lg:col-span-4 md:col-span-5 col-span-5">
                            <img src={logo} alt="" className='mb-15px' />
                            {fText?.map((item, index) => {
                                return (
                                    <Text key={index} class="my-30px text-light-500 text-[15px] font-normal" text={t(item?.text)} />
                                )
                            })}
                        </div>
                        <div className="lg:col-span-4 md:col-span-5 col-span-5">
                            <Text class="text-light-500 text-[15px] font-normal lg:mt-70px mb-20px" text={t("text.f4")} />
                            <Text class="text-light-500 text-[20px] font-bold" text="korablik@yandex.ru" />
                            <div className="flex mt-22px">
                                {iText?.map((item, index) => {
                                    return (
                                        <i key={index} className={item?.class}></i>
                                    )
                                })}
                            </div>
                            <h1 className="text-light-500 text-[15px] font-normal mt-22px">{t("text.f5")}<br /> (GMT +03:00)</h1>
                        </div>
                        <div className="lg:col-span-4 md:col-span-12 col-span-5">
                            <div className="box">
                                <Text class="text-light-500 text-[15px] font-normal mt-70px mb-10px" text={t("text.f6")} />
                                <Text class="text-light-500 text-[20px] font-bold" text="8 (988) 545-55-55" />
                            </div>
                            <div className="box">
                                <Text class="text-light-500 text-[15px] font-normal mt-16px mb-10px" text={t("text.f7")} />
                                <div className="flex mt-22px">
                                    {isText?.map((item, index) => {
                                        return (
                                            <i key={index} className={item?.class}></i>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
})

export default Footer;
