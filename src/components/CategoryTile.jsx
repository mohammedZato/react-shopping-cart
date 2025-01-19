import React from "react";

export default function CategoryTile({...singleCategory}) {
    return (
        <div class="relative group bg-gray-700 p-6 cursor-pointer rounded hover:scale-105 hover:transition-transform duration-1000">
            <div class="overflow-hidden aspect-w-1 aspect-h-1 relative">
                <img 
                    class="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                    src={singleCategory.image} 
                    alt={singleCategory.title}
                />
                <div class="font-bold text-gray-600 text-xs sm:text-sm md:text-base">
                    <p class="w-[100px] text-white text-ellipsis whitespace-nowrap">{singleCategory.name}</p>
                </div>
            </div>
        </div>
    )
}