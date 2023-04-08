import firstActionPic from "./actions__pic-1.png";
import secondActionPic from "./actions__pic-2.png";
import thirdActionPic from "./actions__pic-3.png";

const actions = () => {

    return (
        <>

            <div className="actions">

                <div className="actions__containers">


                    <div className="actions__container">
                        <div className="actions__content">
                        <div className="actions__pic">
                            <img src={firstActionPic}/>
                        </div>
                        <div className="actions__title">Saves Energy</div>
                        <div className="actions__text">When you put the whole picture together, recycling is the right
                            thing to do
                        </div>
                        </div>
                    </div>

                    <div className="actions__container">
                        <div className="actions__content">
                        <div className="actions__pic">
                            <img src={secondActionPic}/>
                        </div>
                        <div className="actions__title">Saves Energy</div>
                        <div className="actions__text">When you put the whole picture together, recycling is the right
                            thing to do
                        </div>
                        </div>
                    </div>


                    <div className="actions__container">
                        <div className="actions__content">
                        <div className="actions__pic">
                            <img src={thirdActionPic}/>
                        </div>
                        <div className="actions__title">Saves Energy</div>
                        <div className="actions__text">When you put the whole picture together, recycling is the right
                            thing to do
                        </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}


export default actions;