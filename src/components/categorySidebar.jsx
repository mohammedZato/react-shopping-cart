import React, { useContext } from "react";
import { shoppingContext } from "../Context";

export default function CategorySidebar() {
    const { categoryToggle } = useContext(shoppingContext);

    return (
        <div class={`bg-black w-[17rem] h-[33rem] fixed top-0 py-10 px-8 z-30 transform transition-transform duration-700 ease-in-out ${categoryToggle ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
            <ul>
                <li class="text-xl mb-10 mt-6 hover:scale-110 transition-transform duration-300">
                    <a class="text-red-500 font-bold" href="">SuperDeals</a>
                </li>
                <li class="text-xl mb-10 hover:scale-110 transition-transform duration-300">
                    <a class="text-white" href="">Plus</a>
                </li>
                <li class="text-xl mb-10  hover:scale-110 transition-transform duration-300">
                    <a class="text-white" href="">New</a>
                </li>
                <li class="text-xl mb-10 hover:scale-110 transition-transform duration-300">
                    <a class="text-white"  href="">AliExpress Business</a>
                </li>
                <li class="text-xl mb-10 hover:scale-110 transition-transform duration-300">
                    <a class="text-white" href="">Home & Garden</a>
                </li>
                <li class="text-xl hover:scale-110 transition-transform duration-300">
                    <a class="text-white" href="">More</a>
                </li>
            </ul>  
        </div>        
    );
};