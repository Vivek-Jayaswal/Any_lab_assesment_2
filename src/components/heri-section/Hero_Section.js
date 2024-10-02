import "./hero.scss"

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-left">
                <h1>Simplifying Influencer <br />
                    Marketing For You!</h1>
                <p> Explore creators across YouTube, Instagram & <br />
                    Facebook to curate unique content for your brand</p>
                <div className="category">
                    <select name="social-media" id="cars">
                        <option value="Instagram">Instagram</option>
                        <option value="SnapChat">SnapChat</option>
                        <option value="FaceBook">FaceBook</option>
                        <option value="YouTube">YouTube</option>
                    </select>
                    <select name="categories" id="cars">
                        <option value="Categories1">Categories1</option>
                        <option value="Categories2">Categories2</option>
                        <option value="Categories3">Categories3</option>
                        <option value="Categories14">Categories4</option>
                    </select>
                    <button>Search</button>
                </div>
                <div className="brand">
                    <p>trusted by</p>
                    <div>
                        <p>CHANEL</p>
                        <p>LOUIS VUITTION</p>
                        <p>PRADA</p>
                        <p>Calvin Klein</p>
                        <p>DENIM</p>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={`${window.origin}/${"assets/hero-sect.png"}`} alt="" />
            </div>
        </div>
    )
}

export default HeroSection;