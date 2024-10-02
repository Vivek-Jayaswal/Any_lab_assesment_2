import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="f-top-left">
                    <p className="heading">BookMyCollab</p>
                    <p className="left-text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut </p>
                    <div className="social-links">
                        <span className="material-icons">email</span>
                        <img src={`${window.origin}/assets/instalogo.jpg`} alt="" />
                        <span className="logo">X</span>
                        <span className="logo">in</span>
                    </div>
                </div>
                <div className="f-top-middle">
                    <p className="heading">Company</p>
                    <div>
                        <p>About</p>
                        <p>Career</p>
                        <p>Terms&Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Refund Policy</p>
                    </div>
                </div>
                <div className="f-top-right">
                    <p className="heading">Join Us</p>
                    <div>
                        <p>Join as a brand</p>
                        <p>Join as a Creator</p>
                        <p>Find Creator</p>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div>
                    <p>No Upfront Payment</p>
                    <p>Verified Creators </p>
                    <p>Inbuilt Messengers</p>
                    <p>Secure and Timely Payment</p>
                </div>

            </div>
            <div className="footer-bottom">
                © Copyright • All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;