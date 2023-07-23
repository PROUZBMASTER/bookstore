
import React from 'react'
import robo from './img/image 5 (1).svg'
import last from './img/image 6.svg'
const myCards = [
    {
        img1: robo,
        img2: last,
        text: "Мифы, тайны и вдохновение",
        text2: "Книжки с черными обложками",
        text3: "Смотреть",
        id: 1

    },
    {
        img1: robo,
        img2: last,
        text: "Открываем новые миры и разбираемся в себе",
        text2: "Книжки с черными обложками",
        text3: "Смотреть",
        id: 2
    },
    {
        img1: robo,
        img2: last,
        text: "Мифы, тайны и вдохновение",
        text2: "Книжки с черными обложками",
        text3: "Смотреть",
        id: 3
    }
]

const Section = () => {
    return (
        <>
            <div className="container mx-auto mt-5 px-[40px] py-[10px]">
                <div className="flex flex-wrap 2xl:justify-between mx-3  xl:justify-between gap-[20px] justify-center">
                    {myCards?.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className=" mt-3">
                                    <div className="xl:w-[340px] md:w-[330px]   w-[356px] 2xl:justify-between md:justify-between 2xl:w-[400px] bg-[#1F1F1F]  h-90 p-[20px]">
                                        <div className="ml-5 lg:ml-0 ">
                                            <h1 className=" sm:text-[22px] text-[#FFF] 2xl:text-[28px] ">{item.text2}</h1>
                                            <div className=" flex p-[0px] justify-around  pt-2">
                                                <div className=" text-[center]">
                                                    <p className=" sm:text-[16px] 2xl:text-[20px] pt-2 text-[#FFF] w-50 text-normal">{item.text}</p>
                                                    <button className="buy-button mt-35 bg-[#FFF] px-[15px] py-[10px] text-[#1F1A2D] text-normal rounded-md">{item.text3}</button>
                                                </div>
                                                <div className="md:pt-1 ">
                                                    <img src={item.img1} alt="" className="h-38" />
                                                    <img src={item.img2} alt="" className="h-38  w-full relative bottom-[50px] right-[50px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Section;