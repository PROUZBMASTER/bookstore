/* eslint-disable react/prop-types */
import { BtnLogo } from "../../assets/img"
import Custom from "../reusecomponents/Custom"

const LineComponent = ({props}) => {
  return (
    <div>
         <div className="container   mx-auto mt-5 px-[40px] py-[10px] mx-auto mt-[40px]">
        <div className="flex justify-between items-center text-center mb-[50px]">
            <h1 className="text-[#FAFAFA] text-[35px] ">{props.title}</h1>
            {
                props.componet_btn ?
            <button>
                <div className="flex justify-between items-center">
                    <h1 className="text-[12px] mr-[10px] text-white">Смотреть все</h1> 
                    <img src={BtnLogo} alt="" />
                </div>
            </button>
            :
            null
            }
        </div>

        <div className="flex flex-wrap justify-between items-center">
            {
                props.custom_card.map((value)=>(
                    <Custom
                    key={value.card_id}
                    props={value}
                    />
                ))
            }           
        </div>
    </div>
    </div>
  )
}

export default LineComponent;