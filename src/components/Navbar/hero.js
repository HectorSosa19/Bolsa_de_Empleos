import React from "react";

const Hero=(props)=>{
    const{handlelogout}=props;
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handlelogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;