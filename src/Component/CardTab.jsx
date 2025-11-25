import card1 from "./image/card1.jpg"
import card2 from "./image/card2.jpg"
import card3 from "./image/card3.jpg"
import card4 from "./image/card4.jpg"
import card5 from "./image/card5.jpg"
import card6 from "./image/card6.png"
import card7 from "./image/card7.jpg"
import card8 from "./image/card8.jpg"
import card9 from "./image/card9.jpg"
import card10 from "./image/card10.jpg"
import card11 from "./image/card11.jpg"
import card12 from "./image/card12.jpg"

import "./NavBar.css"
import Card from "./Card"

export default function() {
    return(
        <>
        <main>
        
        <Card id="CarWash" src={card1}  alt="Car Wash" h4="Car Wash" price="299.00" />
        <Card id="CarRepair" src={card2}  alt="Car Repair" h4="Car Repair" price="499.00" />
        <Card id="CareTaker" src={card3}  alt="CareTaker" h4="Care Taker" price="399.00" />
        <Card id="HomeCook" src={card4}  alt="HomeCook" h4="Home Cook" price="499.00" />
        <Card id="HomeCleaner" src={card5}  alt="HomeCleaner" h4="Home Cleaner" price="399.00" />
        <Card id="Gardener" src={card6}  alt="Gardener" h4="Gardener" price="199.00" />
        <Card id="Security" src={card7}  alt="Security" h4="Security" price="399.00" />
        <Card id="CareTaker" src={card8}  alt="CareTaker" h4="Care Takerr" price="399.00" />
        <Card id="Electrician" src={card9}  alt="Electrician" h4="Electrician" price="299.00" />
        <Card id="Plumber" src={card10}  alt="Plumber" h4="Plumber" price="299.00" />
        <Card id="Carpenter" src={card11}  alt="Carpenter" h4="Carpenter" price="299.00" />
        <Card id="Labour" src={card12}  alt="Labour" h4="Labour" price="399.00" />
        </main>
        </>
    );
}