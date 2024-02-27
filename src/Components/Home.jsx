const Home = () => {
  return (
    <>
      <div
        className=" w-full h-screen  relative"
        style={{
          background: "rgb(255,248,170)",
          background:
            "linear-gradient(0deg, rgba(255,248,170,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div className=" flex justify-center items-center">
          <img className="w-[19%] mb-[18%]" src="/src/assets/logo.png" alt="" />
        </div>
        <div className=" lg:absolute lg:top-[16%] lg:left-[40%]">
          <p className=" lg:font-bold   lg:pr-[60px] font-bold  text-[13px] text-center tracking-tighter  ml-5  ">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>

          <h1 className=" lg:font-semibold  lg:pl-[96px] lg:pt-[10px] pl-[-10px] lg:text-[13px]   pt-8  text-cente lg:frony   ">
            ⚫ C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </h1>
          <h1 className=" lg:font-semibold   lg:pl-[96px]  lg:text-[13px]  lg:te  ">
            ⚫C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </h1>
        </div>

        <div className="lg:flex lg:justify-between flex">
          <img
            className=" lg:w-[20%]  lg:absolute lg:top-[26%] lg:left-3 ml-40 absolute left-[-40%] w-[25%] top-[40%] "
            src="/src/assets/1.png"
            alt=""
          />

          <img
            className="lg:w-[50%] lg:absolute lg:top-[26%] lg:left-[45%] 
             absolute left-[40%] top-[35%] w-[60%]
             mt-[60px]"
            src="/src/assets/2.png"
            alt=""
          />
        </div>
        <span className="lg:absolute lg:top-[95%] lg:left-[40%] absolute top-[60%]">
          <h1 className="lg:font-medium lg:pl-[96px] text-center pt-1 ">
            Government of India has awarded the
            <span className=" font-bold"> "National Energy Conservation </span>
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </h1>
        </span>
      </div>
    </>
  );
};

export default Home;
