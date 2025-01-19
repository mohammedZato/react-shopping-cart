import React from "react";

export default function Footer() {
    return (
        <footer>
            <div class=" bg-gray-200 px-8 lg:px-28">
                <div class="lg:flex lg:flex-row pt-5">
                    <div class="grid grid-cols-2 gap-x-5 sm:grid-cols-3 md:grid-cols-4 lg:mr-auto">
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2">Customer Service</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-500">Help Center</li>
                                <li class=" text-base cursor-pointer text-gray-500">Transaction Services</li>
                                <li class=" text-base cursor-pointer text-gray-500">Agreement for non-EU/UK</li>
                                <li class=" text-base cursor-pointer text-gray-500">Consumers</li>
                                <li class=" text-base cursor-pointer text-gray-500">Terms and Conditions for</li>
                                <li class=" text-base cursor-pointer text-gray-500">EU/EEA/UK Consumers</li>
                                <li class=" text-base cursor-pointer text-gray-500">(Transactions)</li>
                                <li class=" text-base cursor-pointer text-gray-500">Take our feedback survey</li>
                            </ul>
                        </div>
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2">Shopping with us</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-500">Making payments</li>
                                <li class="text-base cursor-pointer text-gray-500">Delivery options</li>
                                <li class="text-base cursor-pointer text-gray-500">Buyer Protection</li>
                            </ul>
                        </div>
                        <div class="mb-3">
                            <h2 class="font-bold text-lg mb-2">Collaborate with us</h2>
                            <ul>
                                <li class="text-base cursor-pointer text-gray-500">Partnerships</li>
                                <li class="text-base cursor-pointer text-gray-500">Affiliate Program</li>
                                <li class="text-base cursor-pointer text-gray-500">DS Center</li>
                                <li class="text-base cursor-pointer text-gray-500">Seller Log in</li>
                                <li class="text-base cursor-pointer text-gray-500">中国卖家入驻</li>
                                <li class="text-base cursor-pointer text-gray-500">Non-Chinese Seller</li>
                                <li class="text-base cursor-pointer text-gray-500">Registration</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="font-bold text-lg mb-2">Pay With</h2>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="font-bold text-lg mb-2">Stay Connected With</h2>
                        <div>
                            <span>
                                <ion-icon class="text-4xl cursor-pointer" name="logo-facebook"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl cursor-pointer" name="logo-twitter"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl cursor-pointer" name="logo-instagram"></ion-icon>
                            </span>
                            <span>
                                <ion-icon class="text-4xl cursor-pointer" name="logo-whatsapp"></ion-icon>
                            </span>
                        </div>
                    </div>  
                </div>
                <div class="mt-4 lg:grid lg:grid-cols-2 gap-x-6">
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3">Help</h2>
                        <p class="text-gray-500 text-base">
                            Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, 
                            Integrity Compliance, Transparency Center, Submit report (non-registered users)
                        </p>
                    </div>
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3">Browse By Category</h2>
                        <p class="text-gray-500 text-base">
                            All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog
                        </p>
                    </div> 
                    <div class="mb-5">
                        <h2 class="font-bold text-lg mb-3">AliExpress Multi-Language Sites</h2>
                        <p class="text-gray-500 text-base">
                            Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, 
                            Vietnamese, Arabic, Hebrew, Polish
                        </p>
                    </div>
                    <div>
                        <h2 class="font-bold text-lg">Alibaba Group</h2>
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