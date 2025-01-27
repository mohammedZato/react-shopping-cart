import React from "react";

export default function Footer() {
    return (
        <footer>
            <div class=" bg-gray-300 px-8 lg:px-28">
                <div class="lg:flex lg:flex-row pt-5">
                    <div class="grid grid-cols-2 gap-x-5 sm:grid-cols-3 md:grid-cols-4 lg:mr-auto">
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2 text-black">Customer Service</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-800">Help Center</li>
                                <li class=" text-base cursor-pointer text-gray-800">Transaction Services</li>
                                <li class=" text-base cursor-pointer text-gray-800">Agreement for non-EU/UK</li>
                                <li class=" text-base cursor-pointer text-gray-800">Consumers</li>
                                <li class=" text-base cursor-pointer text-gray-800">Terms and Conditions for</li>
                                <li class=" text-base cursor-pointer text-gray-800">EU/EEA/UK Consumers</li>
                                <li class=" text-base cursor-pointer text-gray-800">(Transactions)</li>
                                <li class=" text-base cursor-pointer text-gray-800">Take our feedback survey</li>
                            </ul>
                        </div>
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2 text-black">Shopping with us</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-800">Making payments</li>
                                <li class="text-base cursor-pointer text-gray-800">Delivery options</li>
                                <li class="text-base cursor-pointer text-gray-800">Buyer Protection</li>
                            </ul>
                        </div>
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2 text-black">Collaborate with us</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-800">Partnerships</li>
                                <li class="text-base cursor-pointer text-gray-800">Affiliate Program</li>
                                <li class="text-base cursor-pointer text-gray-800">DS Center</li>
                                <li class="text-base cursor-pointer text-gray-800">Seller Log in</li>
                                <li class="text-base cursor-pointer text-gray-800">中国卖家入驻</li>
                                <li class="text-base cursor-pointer text-gray-800">Non-Chinese Seller</li>
                                <li class="text-base cursor-pointer text-gray-800">Registration</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="font-bold text-lg mb-2 text-black">Pay With</h2>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="font-bold text-lg mb-2 text-black">Stay Connected With</h2>
                        <div>
                            <span>
                                <ion-icon class="text-4xl text-black cursor-pointer" name="logo-facebook"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl text-black cursor-pointer" name="logo-twitter"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl text-black cursor-pointer" name="logo-instagram"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl text-black cursor-pointer" name="logo-whatsapp"></ion-icon>
                            </span>
                        </div>
                    </div>  
                </div>
                <div class="mt-4 lg:grid lg:grid-cols-2 gap-x-6">
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3 text-black">Help</h2>
                        <p class="text-gray-500 text-base">
                            Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, 
                            Integrity Compliance, Transparency Center, Submit report (non-registered users)
                        </p>
                    </div>
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3 text-black">Browse By Category</h2>
                        <p class="text-gray-500 text-base">
                            All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog
                        </p>
                    </div> 
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3 text-black">AliExpress Multi-Language Sites</h2>
                        <p class="text-gray-500 text-base">
                            Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, 
                            Vietnamese, Arabic, Hebrew, Polish
                        </p>
                    </div>
                    <div>
                        <h2 class="font-bold text-lg text-black">Alibaba Group</h2>
                        <p class="text-gray-500 text-base">
                            Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, 
                            AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
                        </p>
                    </div> 
                </div>
            </div>
            <div class="bg-black py-3 px-4 text-center">
                <ul class="text-white text-sm flex flex-wrap items-center">
                    <li class="mr-1">Intellectual Property Protection |</li>
                    <li class="mr-1">Privacy Policy |</li>
                    <li class="mr-1">Mapa Strony |</li>
                    <li class="mr-1">Terms of use |</li>
                    <li class="mr-1">Transaction Services Agreement for non-EU/UK Consumers |</li>
                    <li class="mr-1">Warunki dla Konsumentów z UE/EOG/Wielkiej Brytanii |</li>
                    <li class="mr-1">User Information Legal Enquiry Guide ©️ 2010-2024 AliExpress.com. All rights reserved. |</li>
                </ul>
            </div>
        </footer>
    )
}