import Card from "../Card/Card"
import { data2 } from "../data/data";
import "./category.scss"

const CategoriesBottom1 = ({heading}) => {
    return (
        <div className="cateogry-bottom1">
            <div className="category-bottom1-top">
                <h1>{heading}</h1>
                <div className="bottom1-top-child-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <button>View All</button>
                </div>
            </div>
            <>
                {
                    data2.length > 0 ?
                        <div className="category-bottom-card-container">
                            {
                                data2.map((item) => {
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

export default CategoriesBottom1