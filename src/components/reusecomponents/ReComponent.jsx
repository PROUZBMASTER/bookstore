/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { BtnLogo } from "../../assets/img"
import ReCard from "./ReCard"


const ReComponent = ({props}) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-[40px]  mx-auto py-[10px] px-[40px]">
        <div className="flex justify-between items-center text-center mb-[50px]">
            <h1 className="text-[#FAFAFA] text-[20px]">{t(props.title)}</h1>
            {
                props.componet_btn?
            <button>
                <div className="flex justify-between items-center">
                    <h1 className="text-[11px] mr-[10px] text-white">{t("text.kom")}</h1> 
                    <img src={BtnLogo} alt="" />
                </div>
            </button>
            :
            null
            }
        </div>

        <div className=" mx-[-10px] flex flex-wrap justify-between items-center">
            {
                props.custom_card.map((value)=>(
                    <ReCard
                    key={value.card_id}
                    props={value}
                    />
                ))
            }           
        </div>
    </div>
  )
}

export default ReComponent