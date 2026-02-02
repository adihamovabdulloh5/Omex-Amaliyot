import "./footer.css"
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function App() {
    return (
        <>
            <div className="footer-section">
                <div className="who">
                    <img src="https://omex.netlify.app/home-1/img/logo.png" alt="" /> <br /> <br />
                    <span>530.772.4452</span>
                </div>

                <div className="link-section">
                    <div className="links">
                        <h1 className="title">About Us</h1>
                        <p>About Us</p>
                        <p>Work Portfolio</p>
                        <p>Team</p>
                        <p>Plan & Price</p>
                        <p>News</p>
                    </div>

                    <div className="links">
                        <h1 className="title">About Us</h1>
                        <p>Web Design</p>
                        <p>Development</p>
                        <p>Wordpress</p>
                        <p>Online Marketing</p>
                        <p>Content</p>
                    </div>
                </div>

                <div className="social-section">
                    <h2>Social Media</h2>
                    <div className="icon-part"><AiOutlineTwitter className='icons' /></div>
                    <div className="icon-part"><AiOutlineDribbble className='icons' /></div>
                    <div className="icon-part"><AiOutlineInstagram className='icons' /></div>
                </div>
            </div>
        </>
    )
}
