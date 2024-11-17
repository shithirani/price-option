import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions=[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 2000,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "1-hour workout session per day"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 3500,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Unlimited daily access",
            "1 personal training session per week",
            "Free group classes (Yoga, Zumba, etc.)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 5000,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Unlimited daily access",
            "3 personal training sessions per week",
            "Free group classes (Yoga, Zumba, etc.)",
            "Diet and nutrition consultation"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 8000,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Unlimited daily access",
            "Daily personal training sessions",
            "Free group classes (Yoga, Zumba, etc.)",
            "Diet and nutrition consultation",
            "Exclusive access to VIP lounge"
          ]
        }
      ]
      
    return (
        <div>
          <h2 className="text-5xl">Best price in the town</h2>
         <div className="grid grid-cols-4 gap-3 mt-8 text-center">
         {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                
            }
         </div>
        </div>
    );
};

export default PriceOptions;