import "../styles/banner.css"

function Banner({ imageHome, welcomeHome}) {
    return (
        <div className="banner"
            style = {{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageHome})`,
            }}
        >
            <div className="welcomeImage">{`${welcomeHome}`}
            </div>
        </div>
    )
}

export default Banner;