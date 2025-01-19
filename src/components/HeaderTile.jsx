import React from "react";
import mySale from "../images/blacksale.png";
import CountDown from "./CountDown";

export default function HeaderTile() {
    return (
        <section class="bg-black flex justify-center text-center mt-3 text-white font-sans py-4 cursor-pointer">
            <div class="flex flex-col items-center lg:flex-row lg:space-x-48">
                <div>
                    <CountDown 
                        targetDate="2025-01-15T12:00:00"
                    />
                    <h2 class="font-bold text-4xl mb-6">WINTER <span class="text-red-800">SALE</span></h2>
                    <div class="flex space-x-2">
                        <div class="border border-red-800 p-2">
                            <div class="text-red-800 text-base font-bold">GHS441.01 OFF</div>
                            <div class="text-xs text-gray-500">orders <span class="text-sm">GHS3,513.4+</span></div>
                            <div class="text-sm text-red-800 font-bold">Code:239WS3</div>
                        </div>
                        <div class="border border-red-800 p-2">
                            <div class="text-red-800 text-base font-bold">GHS294.01 OFF</div>
                            <div class="text-xs text-gray-500">orders <span class="text-sm">GHS2,345.4+</span></div>
                            <div class="text-sm text-red-800 font-bold">Code:159WS2</div>
                        </div>
                        <div class="border border-red-800 p-2">
                            <div class="text-red-800 text-base font-bold">GHS117.01 OFF</div>
                            <div class="text-xs text-gray-500">orders <span class="text-sm">GHS1,028+</span></div>
                            <div class="text-sm text-red-800 font-bold">Code:69WS08</div>
                        </div>
                    </div>
                </div>
                <div class="relative mt-5">
                    <img 
                        src={mySale} 
                        alt="" 
                        class="size-40"
                    />
                    <div class="bg-red-800 text-xl font-medium size-[65px] rounded-full absolute bottom-5 left-[132px]">
                        50% OFF
                    </div>
                </div>
            </div>
        </section>

        // <section class="bg-black w-full mt-3 text-white font-sans px-36 py-4 cursor-pointer">
        //     <div class="grid grid-cols-2 gap-5 items-center">
        //         <div>
        //             <p class="font-bold text-xl mb-2">Sale ends: Jan 8, 07:59 (Gmto)</p>
        //             <h2 class="font-bold text-5xl mb-6">WINTER <span class="text-red-800">SALE</span></h2>
        //             <div class="flex space-x-1">
        //                 <div class="border border-red-800 p-2">
        //                     <div class="text-red-800 text-base font-bold">GHS441.01 OFF</div>
        //                     <div class="text-xs text-gray-500">orders <span class="text-sm">GHS3,513.4+</span></div>
        //                     <div class="text-sm text-red-800 font-bold">Code:239WS3</div>
        //                 </div>
                        // <div class="border border-red-800 p-2">
                        //     <div class="text-red-800 text-base font-bold">GHS294.01 OFF</div>
                        //     <div class="text-xs text-gray-500">orders <span class="text-sm">GHS2,345.4+</span></div>
                        //     <div class="text-sm text-red-800 font-bold">Code:159WS2</div>
                        // </div>
                        // <div class="border border-red-800 p-2">
                        //     <div class="text-red-800 text-base font-bold">GHS117.01 OFF</div>
                        //     <div class="text-xs text-gray-500">orders <span class="text-sm">GHS1,028+</span></div>
                        //     <div class="text-sm text-red-800 font-bold">Code:69WS08</div>
                        // </div>
        //             </div>
        //         </div>
                // <div class="relative ml-12 sm:hidden lg:block">
                //     <img 
                //         src={mySale} 
                //         alt="" 
                //         class="size-60"
                //     />
                //     <div class="bg-red-800 text-2xl font-bold absolute top-32 left-48 px-3 py-10 rounded-full">
                //         50% OFF
                //     </div>
                // </div>
        //     </div>
        // </section>
    )
}