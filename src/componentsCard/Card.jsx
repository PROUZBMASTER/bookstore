import img from '../assets/img/image5(1).png'
import img1 from '../assets/img/image6(1).png'
import "../App.css"
import { useTranslation } from "react-i18next";

import { carditem1 } from "../utils/Constants"

import "../App.css"
function  Card() {
  const { t } = useTranslation();

  return (

    <div>
      <section className=" container mx-auto flex flex-wrap  justify-center ">
        {carditem1.map((item) => {
          return (

            <div className="section1 mb-50px ml-5 mr-5 mt-[20px]" key={item.id}>
                  <h1 className="text-white py-4 px-5  text-left text-xl">{t(item.title)}</h1>
              <div className="w-[90%] flex ">
                <div>
                  <h1 className="text-white w-[30%] py-4 mt-0 px-5 text-left text-5xl">{t(item.sale)}</h1>
                  <h1 className={item.cardstyle}>{t(item.title2)}</h1>
                  <button className={item.btnstyle}>{t( item.btbn1)}</button>
                </div>
                <div className="mt-0 2xl:ml-[-60px] ml-[-50px] ">
                  <img className="2xl:ml-20  ml-10 " src={img} alt="" />
                  <img className="absolute mt-[-130px]" src={img1} alt="" />
                  
                </div>
              </div>

            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Card
