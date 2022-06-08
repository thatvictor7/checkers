import '../styling/board.css'

function colorSelector(num) {
    return num % 2 === 0 ? 
    <div key={num} style={{backgroundColor: "#3bdbff"}} className='square flex-centered'>{num}</div> : 
    <div key={num} style={{backgroundColor: "#0478b7"}} className='square flex-centered'>{num}</div>
}

export default function Board() {

    // const rowNum = ['0', '1', '2', '3', '4', '5', '6', '7']
    const rowNum = [0,1,2,3,4,5,6,7]
    // const columnChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    // const columnChar = ['0', '1', '2', '3', '4', '5', '6', '7']
    const columnChar = [0,1,2,3,4,5,6,7]

    return (
        <div id='board-container' >
            {rowNum.map((val, index) => {
            // return <div key={index} className='square flex-centered'>{val}</div>
            return(
                <div className='column'>
                    {columnChar.map((v,i) => {
                        var res = val + v
                    return colorSelector(res)
                    // return <div key={res} className='square flex-centered'>{res}</div>
                })}
                </div>
            )
        })}
        </div>
    )
}