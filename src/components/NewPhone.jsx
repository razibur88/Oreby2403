import React from "react";
// import Phone from "assets/phone.jpg";

const NewPhone = () => {
  return (
    <section class="py-8">
      <div
        class={`container mx-auto bg-[url('assets/phone.jpg')] overflow-hidden bg-cover bg-no-repeat w-full h-[370px] pt-[61px] lg:pl-[581px] md:pl-[400px] sm:pl-[200px] pl-5 flex flex-col items-start`}
      >
        <div class=" max-w-full">
          <h2 class="text-[32px] sm:text-[32px] md:text-[36px] lg:text-[39px] text-black font-DMs font-bold">
            Phone of the year
          </h2>
          <p class="text-[14px] sm:text-[15px] md:text-[16px] text-black font-DMs font-medium max-w-full ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum..
          </p>
          <div class="mt-3">
            <button class="h-[50px] w-[150px] sm:w-[185px] bg-[#262626] text-white text-[14px] sm:text-[16px] font-DMs font-bold hover:bg-purple-700 duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default NewPhone;
