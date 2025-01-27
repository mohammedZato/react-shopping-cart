import React, { useContext } from "react";
import myFlag from "../images/ghana1.png";
import { shoppingContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const { cartItems, sidebarToggle, } = useContext(shoppingContext);
    const navigate = useNavigate();

    return (
        <div class={`bg-black flex flex-col py-10 px-8 w-[20rem] text-white mt-2 z-30 fixed top-[-8px] left-[-20px] transform transition-transform duration-700 ease-in-out ${sidebarToggle ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
            <div class="flex items-center cursor-pointer mb-10">
                <span>
                    <ion-icon class="size-10 mr-1" name="barcode-outline"></ion-icon>
                </span>
                <h3 class="text-base">Download the AliExpress app</h3>
            </div>
            <div class="flex items-center cursor-pointer mb-10">
                <img 
                    src={myFlag} 
                    alt="" 
                    class="w-6 mr-1"
                />
                <h3 class="text-base">EN/ <strong>GHS</strong></h3>
            </div>
            <div class="flex items-center cursor-pointer mb-10">
                <span>
                    <ion-icon class="size-8 mr-1" name="person-outline"></ion-icon>
                </span>
                <strong>Sign in / Register</strong>
            </div>
            <div onClick={() => navigate("/cart")} class="flex items-center cursor-pointer relative">
                <span>
                    <ion-icon class="size-8 mr-1" name="cart-outline"></ion-icon>
                </span>
                <div class="absolute left-5 top-0 bg-red-500 border rounded-full px-2">{cartItems.length}</div>
            </div>
        </div>
    )
}