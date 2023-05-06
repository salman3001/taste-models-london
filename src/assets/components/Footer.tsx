import headphone from "../images/headphone.png";
import clock from "../images/clock.png";
import logo from "../images/Brand-logo.svg";
import fb from "../images/fb.svg";
import pintrest from "../images/pintrest.svg";
import insta from "../images/insta.svg";
const Footer = () => {
  return (
    <div className=" bg-base1 text-white">
      <div className=" padding-1 flex flex-col gap-4 sm:flex-row w-full justify-evenly  py-5 md:py-8 lg:py-10  border-b border-[#21272D]">
        <div className="flex gap-6 items-center">
          <div>
            <img src={headphone} alt="" className="max-w-[3rem] h-auto" />
          </div>
          <div>
            <p>Phone : +12 12345 6789</p>
            <p>Email : somthing@email.com</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <img src={clock} alt="" className="max-w-[3rem] h-auto" />
          </div>
          <div>
            <p>Mon-Sat 09:00-23:00;</p>
            <p>Sunday is closed.</p>
          </div>
        </div>
      </div>
      <div className="padding-1 flex flex-col gap-6 sm:flex-row w-full border-b py-7 md:py-9 lg:py-12 border-[#21272D]">
        <div className="sm:w-1/2">
          <div className="max-w-[18rem] space-y-4">
            <div className=" ">
              <img src={logo} alt="" className="w-full" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been{" "}
            </p>
            <p className="text-primary flex justify-between uppercase tracking-[0.12rem] w-full">
              <span>Call center</span>
              <span>:</span>
              <span>+12 12345 6789</span>
            </p>
            <p className="text-[0.8rem]">Follow us</p>
            <div className="flex gap-6">
              <a href="">
                <img src={fb} alt="" className="h-6" />
              </a>
              <a href="">
                <img src={pintrest} alt="" className="h-6" />
              </a>
              <a href="">
                <img src={insta} alt="" className="h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 flex w-full sm:justify-end">
          <div className="flex gap-14 sm:gap-28">
            <div className="flex flex-col gap-4">
              <h6 className="text-2xl pb-2">Quik Links</h6>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-2xl pb-2">Quik Services</h6>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
              <a href="">Lorem Ipsum </a>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-1 py-5 ">
        <p>© 2023 Taste Models Landon, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
