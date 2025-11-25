export default function Card({id, src, alt, h4, price} ) {
    
    return (
        <>
        <div className="card">
            <img id={id} src={src} alt={alt}/>
            <h4>{h4}</h4>
            
                <h3>Rs. {price} starting</h3> <br/>
                    {/* Full car washing at your door step  */}
            
             <button className="buy">Book now</button>
        </div>
        </>
    );

}