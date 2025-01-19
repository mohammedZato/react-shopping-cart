import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductTile({...singleProductItem}) {
    const navigate = useNavigate();

    function handleNavigateToDetailsPage(id) {
        navigate(`/product-details/${id}`);
    }
    return (
        <div class="relative group bg-gray-700 p-6 cursor-pointer rounded">
            <div class="overflow-hidden aspect-w-1 aspect-h-1 relative">
                <img 
                    class="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                    src={singleProductItem.thumbnail} 
                    alt={singleProductItem.title}
                />
                <div class="bg-red-700 border rounded-md text-white font-medium text-base absolute top-0 left-0 px-2 py-1">
                    {singleProductItem.discountPercentage} OFF
                </div>
            </div>
            <div class="flex items-start justify-between mt-4 space-x-5">
                <div class="font-bold text-gray-600 text-xs sm:text-sm md:text-base">
                    <p class="w-[100px] text-white overflow-hidden text-ellipsis whitespace-nowrap">{singleProductItem.title}</p>
                </div>
                <div class="text-right">
                    <p class="text-xs font-bold text-white sm:text-sm md:text-[14px]">${singleProductItem.price}</p>
                </div>
            </div>
            <button onClick={() => handleNavigateToDetailsPage(singleProductItem.id)} class="px-5 mt-5 w-full py-2 bg-black rounded-sm text-white font-bold text-lg hover:scale-105 transition-transform duration-500 hover:border-black">View Details</button>
        </div>
    )
}