import React, { useContext } from "react";
import myFlag from "../images/ghana1.png";
import { shoppingContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { Grid, ShoppingCart, User } from "lucide-react";

export default function Sidebar() {
    const { cartItems, sidebarToggle, } = useContext(shoppingContext);
    const navigate = useNavigate();

    return (
        <div class={`bg-black flex flex-col py-10 px-8 w-[20rem] h-[32rem] text-white mt-2 z-30 fixed top-[-8px] left-[-20px] transform transition-transform duration-700 ease-in-out ${sidebarToggle ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
            <div class="flex items-center cursor-pointer mb-12 mt-6">
                <span>
                    <Grid className="size-9 mr-2"/>
                </span>
                <h3 class="text-xl">Download the AliExpress app</h3>
            </div>
            <div class="flex items-center cursor-pointer mb-12">
                <img 
                    src={myFlag} 
                    alt="" 
                    class="w-8 mr-2"
                />
                <h3 class="text-xl">EN/ <strong>GHS</strong></h3>
            </div>
            <div class="flex items-center cursor-pointer mb-12">
                <span>
                    <User className="size-8 mr-2"/>
                </span>
                <strong className="text-xl">Sign in / Register</strong>
            </div>
            <div onClick={() => navigate("/cart")} class="flex items-center cursor-pointer relative">
                <span>
                    <ShoppingCart className="size-8"/>
                </span>
                <div class="absolute left-5 top-0 bg-red-500 border rounded-full px-2">{cartItems.length}</div>
            </div>
        </div>
    )
}