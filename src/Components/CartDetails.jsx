import React,{useState,useEffect} from "react";
import "./CartStyle.css";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, removeToCart, removeSingleItems, emptyCartItem } from "../features/cartSlice";
import toast from 'react-hot-toast';

const CartDetails = () => {
  const {carts} =useSelector((state)=>state.allCart);

  const [totalprice, setTotalPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  // addToCart 
  const handleIncrement = (e)=>{
        dispatch(addToCart(e));
  }


  // removeToCart 
  const handleDecrement = (e)=>{
    dispatch(removeToCart(e));
    toast.success("Item Remove From Your Cart")

  }
  
  // remove Single Item 
    const handleSingleDecrement = (e)=>{
      dispatch(removeSingleItems(e));
    }

    // emptyCart
    const emptyCart = ()=>{
      dispatch(emptyCartItem())
      toast.success("Your Cart Is Empty")
    }


    // count total price 
    const total = ()=>{
      let totalprice = 0
      carts.map((ele, index) => {
        totalprice  = ele.price * ele.qnty + totalprice
      });
      setTotalPrice(totalprice)
    }

    useEffect(() => {
      total()
    }, [total]);

    
    const countquantity = ()=>{
      let totalquantity = 0
      carts.map((ele, index) => {
        totalquantity  =  ele.qnty + totalquantity
      });
      setTotalQuantity(totalquantity)
    }
    useEffect(() => {
      countquantity()
    }, [countquantity]);



  return (
    <>
      <div className="flex justify-center ">
        <div className=" border bg-gray-100 flex flex-col justify-center mt-5 h-50 w-200 rounded">
          <div className="flex justify-between items-center border rounded h-15 w-full bg-dark ">
            <h4 className="text-white ml-2 ">Cart Calculation{carts.length >0 ? `(${carts.length})`:""}</h4>
            {carts.length > 0 ? (
              <button className="bg-red-500  h-8 w-30 mr-2 rounded text-white" onClick={emptyCart}>
                <span>🗑️ Empty Cart</span>
              </button>
            ) : (
              " "
            )}
          </div>
          <div className="flex justify-center">
            {carts.length === 0 ? (
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="p-5">
                        <img className="h-10 ml-5" src="public/Emptycart.png" />
                        <p className="text-gray-400">Your Cart is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="min-w-full table-auto border border-gray-200">
                <thead className="bg-gray-100">
                  <tr className="text-left text-sm font-medium text-gray-700">
                    <th className="px-4 py-2 border">Action</th>
                    <th className="px-4 py-2 border">Product</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Qnty</th>
                    <th className="px-4 py-2 border">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                        {
                          carts.map((data, index) => {
                            return (
                              <>
                              <tr> 
                                <td className="flex justify-center mt-3 ">
                                  <button className="border bg-red-100 hover:bg-red-400 h-10 w-8" onClick={()=> handleDecrement(data.id)}>🗑️</button>
                                </td>
                                <td ><div className="flex justify-center h-12 w-12 mt-2 "><img className="rounded" src={data.imgdata}/></div></td>
                                <td><div><p className="flex justify-center">{data.dish}</p></div></td>
                                <td className="flex justify-center">₹{data.price}</td>
                                <td>
                                  <div className="flex justify-center">
                                    <button className="border w-8 bg-blue-200 rounded hover:bg-blue-500 mr-1" type="button" onClick={data.qnty <=1 ?()=>handleDecrement(data.id) :()=>handleSingleDecrement(data)}>- </button>
                                    <input className="border w-10" type="text" value={data.qnty}/>
                                    <button className="border w-8 bg-blue-200  rounded hover:bg-blue-500 ml-1" type="button" onClick={()=>handleIncrement(data)}>+ </button>
                                  </div>
                                </td>
                                <td className="flex justify-center">{data.qnty * data.price}</td>
                              </tr>
                              </>
                            )
                          })
                        }
                </tbody>
                <tfoot>
                      <tr>
                        <th>&nbsp;</th>
                        <th colSpan={3}>&nbsp;</th>
                        <th>Items in Cart : <span className="text-red-600">{totalquantity}</span></th>
                        <th>Total Price : <span className="text-red-600">{totalprice}</span></th>
                      </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
