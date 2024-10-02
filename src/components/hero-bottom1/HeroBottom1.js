import Card from "../Card/Card.js";
import { data1 } from "../data/data.js"
import "./hero-bottom.scss"

const HeroBottom1 = ({heading}) => {

    return (
        <div className="hero-bottom-1">
            <div className="hero-bottom1-top">
                <h1>{heading}</h1>
                <div className="hero-bottom1-top-child-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <button>View All</button>
                </div>
            </div>
            <>
                {
                    data1.length > 0 ?
                        <div className="card-container">
                            {
                                data1.map((item) => {
                                    return (
                                        <Card item={item} />
                                    )
                                })
                            }
                        </div>
                        : <p>no data</p>
                }
            </>
        </div>
    )
}

export default HeroBottom1;