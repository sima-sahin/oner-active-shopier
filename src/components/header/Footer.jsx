import { IoMdStar } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import onerActiveLogo from "../../assets/banners/concept/oner-active-logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-zinc-200 h-[0.5px] w-full mt-12"></div>
      <div className="footer flex w-full justify-between my-12 pb-6 px-12 text-left text-black">
        <div className="flex gap-x-10">
          <nav className="flex flex-col">
              <h6 className="mb-1 custom-h">ONER ACTIVE</h6>
              <a className="link link-hover custom-a py-1">About us</a>
              <a className="link link-hover custom-a py-1">Careers</a>
              <a className="link link-hover custom-a py-1">Report Website Fraud</a>
              <a className="link link-hover custom-a py-1">Sitemap</a>
          </nav>
          <nav className="flex flex-col">
              <h6 className="mb-1 custom-h">SERVICES</h6>
              <a className="link link-hover custom-a py-1">Track your order</a>
              <a className="link link-hover custom-a py-1">Size Guide</a>
              <a className="link link-hover custom-a py-1">Contact us</a>
              <a className="link link-hover custom-a py-1">Shipping & delivery</a>
              <a className="link link-hover custom-a py-1">Returns & refunds</a>
              <a className="link link-hover custom-a py-1">Privacy policy</a>
          </nav>
          <nav className="flex flex-col">
              <h6 className="mb-1 custom-h">TOP CATEGORIES</h6>
              <a className="link link-hover custom-a py-1">Last Chance</a>
              <a className="link link-hover custom-a py-1">Bottoms & Leggings</a>
              <a className="link link-hover custom-a py-1">Sports Bras</a>
              <a className="link link-hover custom-a py-1">Hoodies & Jackets</a>
              <a className="link link-hover custom-a py-1">T-Shirts & Tops</a>
          </nav>
          <nav className="flex flex-col">
              <h6 className="mb-1 custom-h">REWARDS</h6>
              <div className="flex items-center">
                <IoMdStar className="text-blue-400 text-lg mr-1"/>
                <a className="link link-hover py-1 custom-a">Loyalty Club</a>
              </div>
          </nav>
        </div>

        <div className="flex flex-col items-start">
          <div className="font-bold my-2 tracking-wide">SIGN UP FOR OUR NEWSLETTER</div>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input type="email" placeholder="Your E-Mail" required/>
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button className="btn btn-neutral join-item"><MdOutlineKeyboardArrowRight className="text-lg"/></button>
          </div>
        
        <div className="text-md my-3">
          <button className="rounded-full bg-black p-2 mx-2"><FaInstagram className="text-white"/></button>
          <button className="rounded-full bg-black p-2 mx-2"><RiFacebookFill className="text-white"/></button>
          <button className="rounded-full bg-black p-2 mx-2"><FaYoutube className="text-white"/></button>
          <button className="rounded-full bg-black p-2 mx-2"><FaTiktok className="text-white"/></button>
          <button className="rounded-full bg-black p-2 mx-2"><FaPinterestP className="text-white"/></button>
        </div>

        <div className="flex justify-end w-full"><img src={onerActiveLogo} alt="oner-active-logo" /></div>
        </div>

      </div>

      <div className="text-left pl-12 text-xs mb-3 text-zinc-700">© 2025 <span className="font-semibold">Oner Active</span> | All Rights Reserved.</div>
    </>
  )
}

export default Footer;
