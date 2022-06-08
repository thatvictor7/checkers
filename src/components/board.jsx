import '../styling/board.css'

export default function Board() {

    // const rowNum = ['0', '1', '2', '3', '4', '5', '6', '7']
    const rowNum = [0,1,2,3,4,5,6,7]
    // const columnChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    // const columnChar = ['0', '1', '2', '3', '4', '5', '6', '7']
    const columnChar = [0,1,2,3,4,5,6,7]

    // function checker() {
    //     // for (let i = 0; i < 8; i++) {
    //     //     return(
    //     //         <div>t</div>
    //     //     )    
    //     // }
    //     rowNum.map((val, index) => {
    //         return <div key={index} className='square'>{val}</div>
    //     })
    // }

    return (
        <div id='board-container' >
            {rowNum.map((val, index) => {
            // return <div key={index} className='square flex-centered'>{val}</div>
            return(
                <div className='column'>
                    {columnChar.map((v,i) => {
                        var res = val + v
                    return <div className='square flex-centered'>{res}</div>
                })}
                </div>
            )
        })}
        </div>
    )
}