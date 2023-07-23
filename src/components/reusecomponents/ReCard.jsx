import { useTranslation } from "react-i18next";
import { favorite } from "../../assets/img"
import CustomBtn from "../CustomBtn"

const ReCard = ({props}) => {
  const { t } = useTranslation();

    return (
        <div className="">
            <div className={` flex justify-evenly items-center bg-[#2B2244] mb-10 w-[295px] h-[178px] pr-2 rounded-lg`}>

                <div className="rounded-lg w-[270px] h-[160px]">
                    <img src={props.card_img}
                        className="w-[86px]  h-[136px] mt-[12px] ml-[9px] mr-[8px]"
                        alt="book" />
                </div>

                <div>
                    <div className="flex mb-[2px] mt-1 justify-evenly flex items-center ">
                        <span className="flex justify-center items-center pl-6">
                            <img src="https://i.pinimg.com/originals/98/4d/22/984d22fce5cae2c01473f4abe8063fd1.png"
                                className="w-[20px] mt-[5px]"
                                alt="star" />
                            <h1 className="text-white mt-[5px]">4.9</h1>
                        </span>
                        <img src={favorite} alt="favorite" className="w-8 h-6 ml-[120px] mt-[15px] mr-2 mx-auto" />
                    </div>
                    <div>
                        <h1 className="text-white leading-3 mb-[4px] mt-[8px] text-[12px] pl-1.5  font-normal">{t(props.title)}</h1>
                        <h1 className="text-[12px] font-normal text-gray-300 pl-1.5 h-[100%]">{t(props.author)}</h1>

                    </div>
                        <div className="flex justify-between items-center mt-5 ml-1">
                            <CustomBtn
                                btnType="button"
                                btnStyle="mt-[-20px] border-2 px-2 py-[2px] text-[14px] w-[94px] h-[33px] font-medium bg-white rounded  text-[#1F1A2D]"
                                btnText={t("text.kor")}
                            />
                            <h1 className="text-[24px] mb-4 text-white">{props.price}₽</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ReCard