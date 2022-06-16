import '../styling/scoreBoard.css'
import { GiSpikedDragonHead, GiLion } from "react-icons/gi";

export default function ScoreBoard(props) {
    console.log(props.score);
    return(
        <div id="scoreboard-container" className='flex-centered'>
            {/* teal */}
            <div className='score'>
                <div className='icon-container flex-centered'>
                    <GiSpikedDragonHead className='icon' />
                </div>
                <div>{props.score.teal}</div>
            </div>
            {/* red */}
            <div className='score'>
                <div className='icon-container flex-centered'>
                    <GiLion className='icon red' />
                </div>
                <div>{props.score.red}</div>
            </div>
        </div>
    )
}