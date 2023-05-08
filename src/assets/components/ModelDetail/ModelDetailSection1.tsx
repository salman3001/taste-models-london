import { BsArrowRight } from "react-icons/bs";
import carolina1 from "../../images/carolina-1.png";
import carolina2 from "../../images/carolina-2.png";
import carolina3 from "../../images/carolina-3.png";
import carolina4 from "../../images/carolina-4.png";
import carolina5 from "../../images/carolina-5.png";
import Rating from "../Rating";
import Badge from "../Badge";

const ModelDetailSection1 = () => {
  return (
    <div className="padding-1 padding-2 pt-10 grid md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={carolina1} alt="" />
        </div>
        <div>
          <img src={carolina2} alt="" />
        </div>
        <div>
          <img src={carolina3} alt="" />
        </div>
        <div>
          <img src={carolina4} alt="" />
        </div>
        <div className="col-span-2">
          <img src={carolina5} alt="" />
        </div>
      </div>
      <div className="space-y-6">
        <button className="btn btn-primary font-semibold text-lg  w-full [&>svg]:right-3">
          Book Caroline now
          <BsArrowRight size={25} />
        </button>
        <div className="max-w-sm">
          <p className="text-2xl">Caroline</p>
          <Rating rating={5} />
          <p className="text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div
          className="flex flex-wrap gap-4 max-w-xl
        "
        >
          <Badge title="Elite" />
          <Badge title="Natural" />
          <Badge title="Open Minded" />
          <Badge title="Elite" />
          <Badge title="Elite" />
          <Badge title="Natural" />
          <Badge title="Open Minded" />
          <Badge title="Elite" />
        </div>
        <div className="space-y-3">
          <p className="font-semibold">
            <span className="text-[#7E8283]">Avaialabilty: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Avaialabilty: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Avaialabilty: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Age: </span>24
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Location: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Avaialabilty: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Age: </span>24
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">Location: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
        </div>
        <div>
          <p className="text-[#7E8283]">
            Viverra accumsan in nisl scelerisque nisi. At risus viverra
            adipiscing at in tellus. Integer neq ualiquam vestibulum en morbi
            blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">
            <span className="text-[#7E8283]">1 Hour: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">2 Hour: </span>24
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">3 Hour: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">4 Hour: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">5 Hour: </span>24
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">6 Hour: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
          <p className="font-semibold">
            <span className="text-[#7E8283]">7 Hour: </span>Advance Notice
          </p>
          <div className="w-full border-b border-[#21272D]"></div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailSection1;
