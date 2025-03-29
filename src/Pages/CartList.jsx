import React, { useContext } from "react";
import { shoppingContext } from "../Context";
import CartTile from "../components/CartTile";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function CartItems() {
    const { cartItems } = useContext(shoppingContext);

    const navigate = useNavigate();

    return(
        <div class="max-w-5xl mx-auto max-md:max-w-xl py-4 px-5 font-poppins">
            <div class="flex items-center justify-center">
                <h1 class="text-2xl font-bold text-black text-center mr-auto mt-5">
                    My Cart Page
                </h1>
                <div class="text-slate-700 text-3xl text-right mx-10 mt-8 relative">
                    <div>
                        <ShoppingCart className="size-8"/>
                    </div>
                    <span class="absolute right-[-6px] top-[-5px] text-sm text-white bg-red-600 rounded-full px-2 border">
                        {cartItems.length}
                    </span>
                </div>
            </div>
            <div class="grid md:grid-cols-3 gap-8 mt-12">
                <div class="md:col-span-2 space-y-4">
                    {
                        cartItems &&
                        cartItems.map(singleCartItem => {
                            return <CartTile 
                                        key={singleCartItem.id}
                                        {...singleCartItem}
                                    />
                        })
                    }
                </div>
                <div class="bg-gray-100 rounded-sm p-4 h-max">
                    <h3 class="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
                        Order Summary
                    </h3>
                    <ul class="text-gray-700 mt-4 space-y-2">
                        <p class="flex flex-wrap gap-4 text-sm font-bold">
                            Total: <span>
                                ${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}
                            </span>
                        </p>
                    </ul>
                    <div class="mt-5 flex space-x-2">
                        <button disabled={cartItems.length === 0} class="disabled:opacity-65 text-sm px-4 py-3 bg-black text-white font-bold">
                            Checkout
                        </button>
                        <button onClick={() => navigate("/")} class="text-sm px-4 py-3 bg-black text-white font-bold">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}