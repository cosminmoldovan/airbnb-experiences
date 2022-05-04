import img from '../images/card-img1.png'
import starImg from '../images/star.png'


function Card(){
    return (
        <div className='card'>
            <img src={img} alt="card-img" className='card-img'/>
            <div className='card-stats'>
                <img src={starImg} alt="" className='card-rating-icon'/>
                <span className='card-rating'>5.0&nbsp;</span>
                <span className='gray'>(6)&nbsp;•&nbsp; </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136 </span>/ person</p>
        </div>
    );
}
export default Card;