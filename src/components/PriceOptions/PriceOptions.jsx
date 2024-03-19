import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    
     const  priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Access to locker room and showers",
              "Free Wi-Fi access",
              "Discounts on merchandise purchases"
            ],
            "price": 29.99,
            "duration": "per month"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "All features of Basic Membership",
              "Access to group fitness classes",
              "Access to sauna and steam room",
              "Towel service",
              "Nutritional guidance"
            ],
            "price": 49.99,
            "duration": "per month"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "All features of Standard Membership",
              "Access to personal training sessions (2 per month)",
              "Access to smoothie bar",
              "Monthly body composition analysis",
              "Priority class booking"
            ],
            "price": 79.99,
            "duration": "per month"
          },
          {
            "id": 4,
            "name": "Annual Membership",
            "features": [
              "All features of Premium Membership",
              "Discounted rate equivalent to 2 months free",
              "Access to priority booking for classes and sessions",
              "Quarterly fitness assessments",
              "Free guest passes (2 per month)"
            ],
            "price": 799.99,
            "duration": "per year"
          }
        ]
      
      
    
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-2 gap-6">

           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;