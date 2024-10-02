import { data3,bgColor } from "../data/data.js";
import "./category.scss"

const Categories = () => {
    return (
        <div className="categories-container">
            <h1>Categories</h1>
            {
                data3.length > 0 ?
                    <div className="card-container">
                        {
                            data3.map((item,idx) => {
                                return (
                                    <div key={idx} style={{backgroundColor:`${bgColor[idx]}`}} className="category-card">
                                        <div className="category-left">
                                            <p>{item.name}</p>
                                            <p className="material-icons">north_east</p>
                                        </div>
                                        <img src={item.image} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <p>not found</p>
            }
        </div>
    )
}

export default Categories;