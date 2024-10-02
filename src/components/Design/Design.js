import "./design.scss";

const DesignerAndCreater = () => {
    return (
        <div className="design-createros">
            <div className="left-part">
                <div  className="left-heading">
                    <span>Meet</span>
                    <span className="head-bold">The Design</span>
                    <span className="head-bold">Creator</span>
                </div>
                <div>
                    <a href="#">Read More </a>
                    <span className="material-icons">north_east</span>
                </div>
            </div>

            <div className="right-part">
                <div className="right-heading">
                    <h1>Aman k</h1>
                    <div className="profile">
                        <img src={`${window.origin}/assets/avtar/avtar1.png`} alt="" />
                        <p>Design Createros</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, amet!</p>
                <div className="avtar-container">
                    <img src={`${window.origin}/assets/avtar/avtar1.png`} alt="" />
                    <img src={`${window.origin}/assets/avtar/avtar2.png`} alt="" />
                    <img src={`${window.origin}/assets/avtar/avtar3.png`} alt="" />
                    <img src={`${window.origin}/assets/avtar/avtar1.png`} alt="" />
                    <img src={`${window.origin}/assets/avtar/avtar2.png`} alt="" />
                    <img src={`${window.origin}/assets/avtar/avtar3.png`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DesignerAndCreater;