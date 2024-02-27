import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const Page2 = () => {
  return (
    <>
      <div className=" bg-[rgb(254,247,169)] w-full relative h-screen  ">
        <h1 className=" lg:flex lg:items-center lg:justify-center lg:font-semibold   lg:tracking-tight text-center lg:absolute pl-20 lg:top-9 absolute top-[-20%] mr-20 ">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h1>

        <img
          className=" lg:w-[60%] w-[99%] lg:absolute lg:top-6 absolute top-[-5%] lg:pt-[59px] lg:rounded-lg  pt-4 lg:ml-[19%]"
          src="src/assets/3.png"
          alt="lo"
        />
        <p
          className=" font-semibold lg:pt-110  text-center  pt-[29%] 
     
        "
        >
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>

        <p className=" border w-full  border-[#a52326] border-b-2 lg:mt-[2%] mt-10"></p>

        <div className=" bg-[rgb(254,247,169)] w-full h-[20vh] lg:mt-[20px] mt-20 ">
          <div className=" ">
            <h1 className=" font-bold lg:ml-[-1%]   text-center  ">
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h1>
            <h2 className=" font-semibold lg:ml-10 pt-8 text-[14px]  text-center ">
              CHEMICALS <span className=" p-1 text-red-600">|</span> PROCESS
              POWER WATER WASTE WATER OILS{" "}
              <span className=" p-2  text-red-600">|</span> GAS PHARMA SUGARS{" "}
              <span className=" p-2  text-red-600">|</span> DISTILLERIES PAPE{" "}
              <span className=" p-2 text-red-600">|</span> PULP MARINE{" "}
              <span className=" p-2 text-red-600">|</span> DEFENCE METAL{" "}
              <span className=" p-2 text-red-600">|</span> MINING FOOD &
              BEVERAGE PETROCHEMICAL{" "}
              <span className=" p-2 text-red-600">|</span> REFINERIES SOLAR
              BUILDING HVAC FIRE FIGHTING AGRICULTURE{" "}
              <span className=" p-2 text-red-600">|</span> RESIDENTIAL
            </h2>
          </div>
        </div>

        <div className=" w-full lg:h-[20%] h-[20%] lg:flex lg:justify-between  bg-red-600    pl-20 pt-4 gap-10 mt-[25%]  text-center  lg:mt-10">
          <span className="  text-white lg:mt-4 lg:ml-6 flex">
            <FaPhoneAlt />
            <p className=" pl-1"> Toll free 1800 200 1234</p>
            1234
          </span>
          <span className=" flex ml-[1%]  lg:mt-4 lg:ml-2 text-white ">
            <RiFacebookCircleLine size={25} />
            <p className=" pt-1 pl-1">www.facebook.com/cripumps</p>
          </span>

          <span className=" lg:flex  lg:mt-4 lg:ml-6  lg:mr-10 flex text-white">
            <TfiWorld size={20} />
            <p className=" pt-1 pl-1">www.crigroups.com</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Page2;
