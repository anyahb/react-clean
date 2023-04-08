import recyclePic from './recycle__pic.png';

const Recycle = () => {
    return (
        <>
            <div className='recycle'>
                <div className='recycle__container'>
                    <div className='recycle__text-container'>
                        <div className='recycle__title'>Here’s What You Can Recycle</div>
                        <div className='recycle__text'>
                            <ul className='recycle__bullets'>
                                <li>Paper</li>
                                <li>Cardboard</li>
                                <li>Plastic Bottles</li>
                                <li>Jugs</li>
                            </ul>
                            <ul className='recycle__bullets'>
                                <li>Aluminum</li>
                                <li>Soda Cans</li>
                                <li>Tin Cans</li>
                                <li>Aluminium Foil</li>
                            </ul>
                        </div>
                    </div>


                    <div className="recycle__pic">
                        <img src={recyclePic}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recycle;

