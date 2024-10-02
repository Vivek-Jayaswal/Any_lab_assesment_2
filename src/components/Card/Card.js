import "./card.scss"

const Card = ({ item }) => {

    console.log(item);

    return (
        <div className="card">
            <img src={item.image} alt="" />
            <div className="middle">
                <div className="name">
                    <p>{item.name}</p>
                    <p>{item.social}</p>
                </div>
                <div className="follower">
                    <p>{item.subscriber}</p>
                    <p>followers</p>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <span className="material-icons">facebook</span>
                    <span className="material-icons">slideshow</span>
                    <span>@</span>
                </div>
                <button>Compare</button>
            </div>
        </div>
    )
}

export default Card;