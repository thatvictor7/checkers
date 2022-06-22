import '../styling/board.css'

let redStart = null
let tealStart = null

function colorSelector(num, squareNum) {
    let stringNumber = doubleDigit(squareNum)
    // console.log(num + "color select function, " + stringNumber);
    return num % 2 === 0 ? 
    // white
    <div key={squareNum} style={{backgroundColor: "rgba(204,204,204,1)"}} className='square flex-centered'>{stringNumber}</div> : 
    // black
    <div key={squareNum} style={{backgroundColor: "rgba(0,0,0,0.99)"}} className='square flex-centered'>{stringNumber}</div>
    // <div key={squareNum} style={{backgroundColor: "rgba(0,0,0,0.7745348505613183)"}} className='square flex-centered'><div className='disk red-checker flex-centered    '>{stringNumber}</div></div>
}

function startingPosition(params) {
    
}

function doubleDigit(number) {
    let newNumber = number.toString()
    return newNumber.length < 2 ? 
    `0${newNumber}`:
    newNumber;
}

export default function Board(props) {
    const rowNum = [0,1,2,3,4,5,6,7]
    const columnChar = [0,1,2,3,4,5,6,7]
    let counter = 0
    redStart = props.state.redCheckersPositions
    tealStart = props.state.tealCheckersPositions
    console.log(redStart);
    // console.log('test');
    return (
        <div id='board-container' >
            {rowNum.map((val, index) => {
            return(
                <div className='column'>
                    {columnChar.map((v,i) => {
                        counter++
                        var res = val + v
                        // console.log(redStart);
                    return colorSelector(res,counter)
                    // return <div key={res} className='square flex-centered'>{res}</div>
                })}
                </div>
            )
        })}

        </div>
    )
}