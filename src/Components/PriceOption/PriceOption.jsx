// import PropTypes from "prop-types";

import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const{name,features,price}=option
    return (
        <div className="bg-green-500 text-white p-6 rounded-lg text-center">
           <h1 >
            <span className="text-3xl">{price}</span>
            <span className="text-2xl">/mon</span>
            </h1> 
         <h4>name:{name}</h4>
         {
            features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
         }
         <button className="bg-blue-900 w-full p-2 rounded-md hover:bg-green-600 mt-12">Buy now</button>
         
        </div>
    );
};

// PriceOption.PropTypes={
//     option:PropTypes.object
// }
export default PriceOption;