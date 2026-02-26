import React from "react";
import Button from "./Button.jsx";

function Banner() {
    return (
        <div className="absolute w-[1162px] h-[598px] top-[92px] left-[164px]">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h1 className="text-4xl mb-8 font-semibold text-[#184657]">The dream of every frontend developer!</h1>
                    <h2 className="text-5xl mb-8 font-extrabold text-black">Vite is here</h2>
                    <div className="text xl mb-10 font-normal text-black">Download now.<br/>See Versions.</div>
                    <div className="flex space-x-4">
                        <Button className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg[#3b4ba5]
                        hover:text-white" name="Download"/>
                        <Button className="border border-solid border=[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg" name="Versions"/>
                    </div>
                    </div>
                <div className="w-1/2">
                    <img src="vite.svg" alt="Banner Image" className="w-[553px] h-[598px]" />
                </div>
            </div>
        </div>
    );
}
export default Banner;