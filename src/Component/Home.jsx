import card1 from "./image/card1.jpg"
import card2 from "./image/card2.jpg"
import card3 from "./image/card3.jpg"
import card4 from "./image/card4.jpg"
import card5 from "./image/card5.jpg"
import card6 from "./image/card6.png"

import Card from "./Card"
export default function Home () {
    return (
        <div className="services">
            <h2>Home Utility Services at your doorstep</h2>
             
             <div className="box">
            <h3>What are you looking for?</h3>

                   <Card id="CarWash" src={card1}  alt="Car Wash" h4="Car Wash" price="299.00" />
                    <Card id="CarRepair" src={card2}  alt="Car Repair" h4="Car Repair" price="499.00" />
                    <Card id="CareTaker" src={card3}  alt="CareTaker" h4="Care Taker" price="399.00" />
                    <Card id="HomeCook" src={card4}  alt="HomeCook" h4="Home Cook" price="499.00" />
                    <Card id="HomeCleaner" src={card5}  alt="HomeCleaner" h4="Home Cleaner" price="399.00" />
                    <Card id="Gardener" src={card6}  alt="Gardener" h4="Gardener" price="199.00" />
            

            </div>
        </div>
        
    )
}