// components/Contact.js
import { FaWhatsappSquare } from "react-icons/fa";
import {
    MdEmail,
    MdOutlineLocalPhone,
    MdLocationPin,
} from "react-icons/md";

export default function Contact() {
    return (
        <div className="bg-slate-300 min-h-screen">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif px-4 md:px-7 shadow-2xl text-center md:text-left">
                Contact
            </h1>
            <div className="mt-10 px-4 md:px-7 space-y-8 text-xl md:text-2xl lg:text-3xl">
                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                    <FaWhatsappSquare size={40} className="text-green-500" />
                    <span className="font-bold">WhatsApp: 0301-3696311</span>
                </div>
                {/* Email */}
                <div className="flex items-center space-x-4">
                    <MdEmail size={40} className="text-blue-500" />
                    <span className="font-bold">Email: ryyanchoudhary9@gmail.com</span>
                </div>
                {/* Mobile */}
                <div className="flex items-center space-x-4">
                    <MdOutlineLocalPhone size={40} className="text-yellow-500" />
                    <span className="font-bold">Mobile: 0301-3696311</span>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-4">
                    <MdLocationPin size={40} className="text-red-500" />
                    <span className="font-bold">Location: Sanghar, Sindh</span>
                </div>
            </div>
        </div>
    );
}
