import '../styling/scoreBoard.css'
import { GiSpikedDragonHead, GiLion } from "react-icons/gi";

export default function ScoreBoard(props) {
    return(
        <div id="scoreboard-container" className='flex-centered'>
            <div className='score teal'>
                <div className='icon-container flex-centered'>
                    <GiSpikedDragonHead className='icon' />
                </div>
                <div>0</div>
            </div>
            <div className='score red'>
                <div className='icon-container flex-centered'>
                    <GiLion className='icon' />
                </div>
                <div>0</div>
            </div>
        </div>
    )
}