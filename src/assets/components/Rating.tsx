import star from "../images/star-full.svg";
import starFaded from "../images/star-faded.svg";

interface Iprop {
  rating: number;
}
const Rating = (prop: Iprop) => {
  return (
    <div className="flex [&>img]:h-6 gap-1">
      <img src={prop.rating >= 1 ? star : starFaded} alt="" />
      <img src={prop.rating >= 2 ? star : starFaded} alt="" />
      <img src={prop.rating >= 3 ? star : starFaded} alt="" />
      <img src={prop.rating >= 4 ? star : starFaded} alt="" />
      <img src={prop.rating === 5 ? star : starFaded} alt="" />
    </div>
  );
};

export default Rating;
