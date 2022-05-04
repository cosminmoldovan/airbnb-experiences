import starImg from '../images/star.png'


function Card(props){
    return (
        <div className='card'>
            <img src={props.img} alt="card-img" className='card-img'/>
            <div className='card-stats'>
                <img src={starImg} alt="" className='card-rating-icon'/>
                <span className='card-rating'>{props.rating}&nbsp;</span>
                <span className='gray'>({props.reviewCount})&nbsp;•&nbsp; </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price} </span>/ person</p>
        </div>
    );
}
export default Card;