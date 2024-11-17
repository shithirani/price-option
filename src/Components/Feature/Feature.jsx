
import { FaRegCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center "><FaRegCircleCheck className="mr-4 text-rose-500"/>{feature}</p>
        </div>
    );
};

export default Feature;