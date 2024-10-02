import "./social.scss"

const SocialMedia = () => {
    return (
        <div className="social-media">
            <div className="social-heading">
                <h1>Associated Brands</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div className="logo-container">
                <div>
                    <img src={`${window.origin}/assets/logo/Google_2015_logo (1).svg`} alt="" />
                    <img src={`${window.origin}/assets/logo/spotify.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/stripe.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/youtube.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/microsoft.jpg`} alt="" />
                </div>
                <div>
                    <img src={`${window.origin}/assets/logo/medium.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/uber.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/zoom.jpg`} alt="" />
                    <img src={`${window.origin}/assets/logo/grab.jpg`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;