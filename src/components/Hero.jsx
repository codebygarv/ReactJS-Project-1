const Herosection = () => {
    return (
        <main className="hero">
            <div className="herocontent">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>


                <div className="herobutton">
                    <button>Shop Now</button>
                    <button className="seconbtn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>
                </div>

                <div className="brands">
                    <img src="/images/amazon.png" alt="amazon-icon" />
                    <img src="/images/flipkart.png" alt="flipkart-icon" />
                </div>
            </div>
            <div className="heroimg">
                <img src="/images/hero-image.png" alt="hero-image" />
            </div>
        </main>

    );
}

export default Herosection;