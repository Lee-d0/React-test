import "./Counter.css"

import React, {useState} from 'react'


function Counter(){
//    const [counter, setCounter]= useState(0)
//    function addCounter(){
//     setCounter((prevCounter) => prevCounter + 1)
//     setCounter((prevCounter) => prevCounter + 1)
//    }
//    function minusCounter(){
//     setCounter((prevCounter) => prevCounter- 1)
//     setCounter((prevCounter) => prevCounter- 1)

//    }

    // const [cart, setCart] = useState({
    //     item: "apple", 
    //     quantity: 0})
    //     function addApple(){
    //         setCart((prevCart) => ({
    //             ...prevCart,
    //             quantity: prevCart.quantity + 1,
    //         }))
    //     }

    //     function minusApple(){
    //         setCart((prevCart) => ({
    //             ...prevCart,
    //             quantity: prevCart.quantity - 1,
    //         }))
    //     }


    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus(){
        setArr(prevArr => [...prevArr, "-"])

    }



    return(
        <div>
           <button onClick={addMinus}>-</button>
           <button onClick={addPlus}>+</button>
           {arr.toString()}
        </div>
    )
}
export default Counter