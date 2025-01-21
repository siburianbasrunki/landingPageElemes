import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating = ({ rating, size = 18 }: StarRatingProps) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-yellow-400" size={size} />
          ) : (
            <CiStar className="text-gray-300" size={size} />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
