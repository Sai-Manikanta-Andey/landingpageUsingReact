import React from 'react'



const Hero = () => {
  return (
    <main className="hero">
    <div className="intro">
        <h1 className='title'>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          laboriosam soluta et nesciunt alnt modi facere quae molestiae
          assumenda fuga?
        </p>
        <div className="hero-btn">
          <button className='firstbtn'>Shop Now!</button>
          <button className='secbtn'>Category</button>
        </div>

        <div className="shopping-sites">
            <img
            src="./images/flipkart-logo-39904.png"
            alt="flipkart"
            width={30} className='f'/>
            <img
            src="./images/amazon-png-logo-vector-6706.png"
            alt="amazon"
            width={30} className='a'/>
        </div>
    </div>
    <div className="heroimage">
        <img src="./images/heroimg.png" alt="heroim"  className='heroimg' />
    </div> 
    </main>
  );
}

export default Hero;