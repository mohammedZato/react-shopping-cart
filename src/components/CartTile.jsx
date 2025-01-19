import React, { useContext } from "react";
import { shoppingContext } from "../Context";

export default function CartTile({...singleCartItem}) {
    const { handleRemoveProduct, handleAddToCart } = useContext(shoppingContext);
    return (
        <div>
            <div class="grid grid-cols-3 items-start gap-5">
                <div class="col-span-2 flex items-start gap-4">
                    <div class="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                        <img 
                            class="w-full h-full object-contain"
                            src={singleCartItem.thumbnail}
                        />
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-gray-900">{singleCartItem.title}</h3>
                        <button onClick={() => handleRemoveProduct(singleCartItem, true)} class="text-sm px-4 py-3 bg-black text-white font-bold">REMOVE ITEM</button>
                    </div>
                </div>
                <div class="ml-auto">
                    <h3 class="text-lg font-bold text-gray-900">
                        ${singleCartItem.totalPrice.toFixed(2)}
                    </h3>
                    <p class="mt-2 mb-3 font-bold"> <span class="text-sm">x</span>{singleCartItem.quantity}</p>
                    <div class="mt-3"> 
                        <button 
                            onClick={() => handleRemoveProduct(singleCartItem)}
                            class=" disabled:opacity-65 border border-[#000]"
                            disabled={singleCartItem.quantity === 1}
                            >
                            -
                        </button>
                        <button onClick={() => handleAddToCart(singleCartItem)} class="border border-[#000]">+</button>
                    </div>
                </div>
            </div>
            <hr class="border-gray-500"/>
        </div> 
    )
}