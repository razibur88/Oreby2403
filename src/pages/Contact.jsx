import React from 'react'
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <section>
    <Container>
      <div className="">
        <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
          Contacts
        </h3>
        <div className="flex items-center py-4">
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/">Home</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/contact">Contacts</Link>
          </h2>
        </div>
      </div>
      <div className="w-1/2">
     <div className="pt-[50px]">
     <h3 className="font-sans font-bold text-[39px] text-[#262626] pb-[40px]">
            Fill up a Form
          </h3>
     </div>
      <form>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name here"
              className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
              font-sans font-normal text-[14px] text-[#767676] "
            />
          </div>
          <div className="flex flex-col py-[23px]">
            <label
              htmlFor=""
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Your email here"
              className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
              font-sans font-normal text-[14px] text-[#767676] "
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Message
            </label>
            <textarea
              className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
              font-sans font-normal text-[14px] text-[#767676] resize-none"
              rows="4"
              placeholder="Your message here..."
            />
          </div>
         <div className="pt-[30px]">
         <button type="submit" className="px-10 py-4 border border-black  bg-black text-white">
         Contact
          </button>
         </div>
        </form>
      </div>
      <div className="pt-[120px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1467488049316!2d90.3798147743258!3d23.742145789095115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b067dbaf61%3A0x75c5b9a41c0b3c4a!2sCreative%20IT%20Institute%20(Campus%202)!5e0!3m2!1sen!2sbd!4v1726727168636!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  </section>
  )
}

export default Contact