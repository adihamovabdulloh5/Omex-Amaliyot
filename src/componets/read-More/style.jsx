import "./style.css"

export default function App() {
    return (
        <>
            <div className='mian-section'>
                <div className='section-one'>
                    <span>Welcome to <span className='omex'>Omex</span></span>
                    <h1>Your best choice for <br /> Creative Agency</h1>
                    <a href="#" className="btn-green">Read More</a>
                </div>

                <div className="section-img">
                        <img src="https://omex.netlify.app/home-1/img/slider.png" alt="" />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
        
    )
}
