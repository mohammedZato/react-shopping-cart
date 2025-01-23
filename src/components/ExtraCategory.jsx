import React from "react";

export default function ExtraCategory() {
    return(
        <div class="flex justify-center my-5 mx-2">
            <ul class="grid grid-cols-3 gap-x-4 gap-y-1 md:grid-cols-5 lg:flex lg:justify-center lg:px-8">
                <li class="text-gray-500 text-xs cursor-pointer">View More</li>
                <li class="text-gray-500 text-xs cursor-pointer">ac recharge kit</li>
                <li class="text-gray-500 text-xs cursor-pointer">ahego hoodie</li>
                <li class="text-gray-500 text-xs cursor-pointer">chromebook charger</li>
                <li class="text-gray-500 text-xs cursor-pointer">ps2 controller</li>
                <li class="text-gray-500 text-xs cursor-pointer">purge mask</li>
                <li class="text-gray-500 text-xs cursor-pointer">renaissance dress</li>
                <li class="text-gray-500 text-xs cursor-pointer">diamond tester</li>
                <li class="text-gray-500 text-xs cursor-pointer">gatsby dress</li>
                <li class="text-gray-500 text-xs cursor-pointer">inflatable tent</li>
                <li class="text-gray-500 text-xs cursor-pointer">hoverboard charger</li>
                <span class="text-sm pl-1 text-gray-500 bg-gray-300 cursor-pointer rounded-full">More &#9662;</span>
            </ul>
        </div>
    )
}