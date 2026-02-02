import "./contact.css"

export default function App() {
    return (
        <>
            <div className="contact-section">
                <div className="contact-img">
                    <img src="https://omex.netlify.app/home-1/img/contact.png" alt="" />
                </div>

                <div className="contact-login">

                    <div className="heading-login">
                        <span>Contact</span>
                        <h2>Keep In Touch</h2>
                    </div>

                    <div className="login-part">
                        <div className="inputs-section">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="textares-section">
                                <textarea placeholder="Massege" ></textarea>
                            </div>
                    </div>
                    <button className="btn btn-block" type="submit">Send Now!</button>
                </div>
            </div>
        </>
    )
}
