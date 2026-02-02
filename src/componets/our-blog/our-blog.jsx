import "./our-blog.css"

export default function App() {
    return (
        <>
            <div className="blog-section">
                <div className="heading">
                    <span className="blog-spam">Our Blog</span>
                    <h2 className="blog-title">Our Company News</h2>
                </div>

                <div className="blog">
                    <div className="box blog-box">
                        <img src="https://omex.netlify.app/home-1/img/blog/1.png" className="img-fluid" alt="" />
                        <h3>
                            <a href="#0" className="blog-title">Bootstrap 4 Updates</a>
                        </h3>
                        <p>Lorem ipsum dolor amet, an dusino constituto, mir es pertin.</p>
                    </div>

                    <div className="box blog-box">
                        <img src="https://omex.netlify.app/home-1/img/blog/2.png" className="img-fluid" alt="" />
                        <h3>
                            <a href="#0" className="blog-title">Bootstrap 4 Updates</a>
                        </h3>
                        <p>Lorem ipsum dolor amet, an dusino constituto, mir es pertin.</p>
                    </div>

                    <div className="box blog-box">
                        <img src="https://omex.netlify.app/home-1/img/blog/3.png" className="img-fluid" alt="" />
                        <h3>
                            <a href="#0" className="blog-title">Bootstrap 4 Updates</a>
                        </h3>
                        <p>Lorem ipsum dolor amet, an dusino constituto, mir es pertin.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
