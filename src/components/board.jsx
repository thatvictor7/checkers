import '../styling/board.css'

function colorSelector(num, squareNum) {
    let stringNumber = doubleDigit(squareNum)
    return num % 2 === 0 ? 
    <div key={squareNum} style={{backgroundColor: "#3bdbff"}} className='square flex-centered'>{stringNumber}</div> : 
    <div key={squareNum} style={{backgroundColor: "#0478b7"}} className='square flex-centered'>{stringNumber}</div>
    // <div key={squareNum} style={{backgroundColor: "#0478b7"}} className='square flex-centered'><div className='disk light'></div></div>
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
    console.log(props.state.darkCheckersPositions);
    return (
        <div id='board-container' >
            {rowNum.map((val, index) => {
            return(
                <div className='column'>
                    {columnChar.map((v,i) => {
                        counter++
                        var res = val + v
                    return colorSelector(res,counter)
                    // return <div key={res} className='square flex-centered'>{res}</div>
                })}
                </div>
            )
        })}

        </div>
    )
}