import "./workprocess.scss";


const AppWorkProcess = () => {
    return (
        <div className="work-process">
            <h1 className="work-heading">How It Works</h1>
            <div className="work-detils">
                <div className="work-info">
                    <button className="material-icons search">search</button>
                    <p className="work-info-heading">Seacrh</p>
                    <div>
                        <p>Search through thousands of creators</p>
                        <p>for free and find the one best suited</p>
                        <p>for the campaign.</p>
                    </div>
                </div>
                <div className="border"></div>
                <div className="work-info">
                <button className="material-icons reviews">share_reviews</button>
                    <p className="work-info-heading">Share & Review</p>
                    <div>
                        <p>Search through thousands of creators</p>
                        <p>for free and find the one best suited</p>
                        <p>for the campaign.</p>
                    </div>
                </div>
                <div className="border"></div>
                <div className="work-info">
                <button className="material-icons pyment">credit_card</button>
                    <p className="work-info-heading">Pay Securly</p>
                    <div>
                        <p>Search through thousands of creators</p>
                        <p>for free and find the one best suited</p>
                        <p>for the campaign.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWorkProcess;


