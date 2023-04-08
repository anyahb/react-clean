import girl from "./intro__pic.png";

const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="intro__text-container">
                    <div className="intro__title">Lets Make The World a Better Place</div>
                    <div className="intro__text">Have you ever wondered how you can make the world a better place? Here’s a reminder that YOU matter and that it’s the small things that count.</div>
                </div>

                <div className="intro__pic">
                    <img className="intro__img" src={girl} />
                </div>
            </div>
        </>
    )
}

export default Intro;