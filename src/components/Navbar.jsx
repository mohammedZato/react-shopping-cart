import React, { useContext, useState } from "react";
import myLogo from "../images/myLogo.png";
import myFlag from "../images/ghana1.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { shoppingContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [item, setItem] = useState("");
    const { cartItems } = useContext(shoppingContext);
    const navigate = useNavigate();
    
    return (
        <nav>
            <div class="mb-4 pt-1 mx-1 flex items-center justify-center space-x-5">
                <div>
                    <img 
                        src={myLogo} 
                        alt="" 
                        class="w-20"
                    />
                </div>
                <div class="relative">
                    <input 
                        type="text" 
                        class="border py-3 px-4 w-64 rounded-3xl border-black"
                        placeholder="I'm shopping for..."
                        id="item"
                        name="item"
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                    />
                    <button class="px-5 py-1 rounded-full bg-black absolute top-0 left-[181px]">
                        <ion-icon class="size-8 text-white" name="search-circle"></ion-icon>
                    </button>
                </div>
                <div class="hidden lg:flex lg:flex-row lg:space-x-7">
                    <div class="flex items-center cursor-pointer">
                        <span>
                            <ion-icon class="size-10 mr-1" name="barcode-outline"></ion-icon>
                        </span>
                        <h3 class="text-sm">Download the <br /> AliExpress app</h3>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <img 
                            src={myFlag} 
                            alt="" 
                            class="w-6 mr-1"
                        />
                        <h3 class="text-sm">EN/ <br /> <strong>GHS</strong></h3>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <span>
                            <ion-icon class="size-8 mr-1" name="person-outline"></ion-icon>
                        </span>
                        <strong>Sign in / <br /> Register</strong>
                    </div>
                    <div onClick={() => navigate("/cart")} class="flex items-center cursor-pointer relative">
                        <span>
                            <ion-icon class="size-8 mr-1" name="cart-outline"></ion-icon>
                        </span>
                        <div class="absolute top-0 right-[-10px] bg-red-500 border rounded-full px-2">{cartItems.length}</div>
                    </div>
                </div>  
                <div>
                    <span class="text-4xl cursor-pointer lg:hidden">
                        <ion-icon onclick="sidebar(e)" name="menu-outline"></ion-icon>
                    </span>
                </div>
            </div> 
            <div class="flex items-center px-10 lg:justify-center lg:space-x-6">
                <button class="rounded-3xl bg-black text-white mr-auto lg:mr-0 hover:scale-x-110 transition-transform duration-500">
                    Categories
                </button>
                <ul class="flex flex-wrap md:space-x-3 lg:space-x-6">
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-red-500 font-bold hover:text-black" href="">SuperDeals</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">Plus</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">New</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black"  href="">AliExpress Business</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">Home & Garden</a>
                    </li>
                    <li class="text-[17px] lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">More</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}