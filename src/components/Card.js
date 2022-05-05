import starImg from '../images/star.png'


function Card(props){
    console.log(props)
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`./card-images/${props.item.coverImg}`} alt="card-img" className='card-img'/>
            <div className='card-stats'>
                <img src={starImg} alt="" className='card-rating-icon'/>
                <span className='card-rating'>{props.item.stats.rating}&nbsp;</span>
                <span className='gray'>({props.item.stats.reviewCount})&nbsp;•&nbsp; </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price} </span>/ person</p>
        </div>
    );
}
export default Card;