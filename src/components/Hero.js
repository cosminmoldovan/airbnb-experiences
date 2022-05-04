import heroImg from '../images/hero-img.png'

function Hero(){
    return(
        <section className="hero">
            <img src={heroImg} alt="hero-img" className='hero-img'/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by<br/>
             one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}
export default Hero;