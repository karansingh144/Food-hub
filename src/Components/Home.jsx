// import React, { useState } from 'react';
// import './Style.css';
// import CardsData from './CardData';
// import { addToCart } from '../features/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { motion } from "framer-motion";

// const Home = () => {
//   const [cartData, setCartData] = useState(CardsData);

//   const dispatch = useDispatch();


//   // add to cart log
//   const send = (e)=> {

//      dispatch(addToCart(e));
//      toast.success("item added In Your Cart")
     

//   }


//   // const addHandle = ()=>{
//   //   alert("Added Succesfully ✅")
//   // }

//   return (
//     <div>
//       <section className='mt-4'>
//         <h2 className='text-xl font-bold ml-28'>Home Products</h2>
//         <div className=' w-full  mt-2 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2  md:gap-1 gap-4 p-4'>
//           {
//             cartData.map((element, index) => {
//               return (
//                 <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 key={index} className='border h-auto w-98  ml-8 flex flex-col items-center bg-lime-20 p-4 rounded-lg shadow-md hover:bg-50'>
//                   <img
//                     className='h-60 w-full object-cover rounded-2xl'
//                     src={element.imgdata}
//                     // alt={element.rname}
//                   />
//                   <div className='flex justify-between mt-2 w-full'>
//                   <h6 className='ml-2 text-sm text-gray-500'>Dish: <span className='font-medium'>{element.dish}</span></h6>
//                     <h6 className='ml-2 font-semibold'>{element.rname}</h6>
//                     <span className='h-6 w-12 p-0.5 rounded bg-green-600 text-white mr-2 flex items-center justify-center text-sm'>
//                       {element.rating} ✩
//                     </span>
//                   </div>

//                   <div className='flex justify-between w-full mt-1'>
//                     <p className='ml-2 text-sm text-gray-700'>{element.address}</p>
//                     <span className='mr-2 text-sm font-medium'>₹{element.price}</span>
//                   </div>

//                   <div className='w-full border-b mt-2 mb-2'></div>

//                   <div className='flex justify-center w-full '>
//                     <button className='border h-8 w-20 rounded bg-blue-600 text-white hover:bg-blue-700 ' onClick={()=>send(element)}>
//                       Add
//                     </button>
//                   </div>
//                 </motion.div>
//               )
//             })
//           }
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
  














// import React, { useState } from 'react';
// import './Style.css';
// import CardsData from './CardData';
// import { addToCart } from '../features/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { motion } from "framer-motion";

// const Home = () => {
//   const [cartData, setCartData] = useState(CardsData);
//   const dispatch = useDispatch();

//   const send = (e) => {
//     dispatch(addToCart(e));
//     toast.success("item added In Your Cart");
//   };

//   return (
//     <div>
//       <section className='mt-4'>
//         <h2 className='text-xl font-bold ml-4 sm:ml-8 md:ml-16 lg:ml-28'>Home Products</h2>
        
//         <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 px-2 sm:px-4'>
//           {cartData.map((element, index) => {
//             return (
//               <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 key={index}
//                 className='border w-full flex flex-col items-center bg-lime-20 p-3 sm:p-4 rounded-lg shadow-md hover:bg-50'
//               >
//                 <img
//                   className='h-40 sm:h-60 w-full object-cover rounded-xl'
//                   src={element.imgdata}
//                   alt={`Dish: ${element.dish}`}
//                 />

//                 <div className='flex flex-wrap justify-between mt-2 w-full text-sm sm:text-base'>
//                   <h6 className='ml-1 text-gray-500'>
//                     Dish: <span className='font-medium'>{element.dish}</span>
//                   </h6>
//                   <h6 className='font-semibold'>{element.rname}</h6>
//                   <span className='h-5 w-10 sm:h-6 sm:w-12 p-0.5 rounded bg-green-600 text-white flex items-center justify-center text-xs sm:text-sm'>
//                     {element.rating} ✩
//                   </span>
//                 </div>

//                 <div className='flex justify-between items-center w-full mt-1 text-sm'>
//                   <p className='ml-1 text-gray-700'>{element.address}</p>
//                   <span className='mr-1 font-medium'>₹{element.price}</span>
//                 </div>

//                 <div className='w-full border-b mt-2 mb-2'></div>

//                 <div className='flex justify-center w-full'>
//                   <button
//                     className='border h-8 w-full sm:w-20 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm'
//                     onClick={() => send(element)}
//                   >
//                     Add
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;















import React, { useState } from 'react';
import './Style.css';
import CardsData from './CardData';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("item added In Your Cart");
  };

  return (
    <div>
      <section className='mt-4'>
        <h2 className=' flex text-xl font-bold ml-30 justify-center mr-20 2xl:justify-start xl:justify-start lg:justify-start md:justify-start md:ml-30 lg:ml-30 xl:ml-28 2xl:ml-28'>Home Products</h2>
        
        <div className='w-330 ml-20  mt-4  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 p-4'>
          {cartData.map((element, index) => {
            return (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                key={index}
                className='border w-full flex flex-col items-center bg-lime-20 p-4 rounded-lg shadow-md hover:bg-50'
              >
                <img
                  className='2xl:h-60 2xl:w-full xl:h-60 xl:w-full lg:h-60 lg:w-full md:h-60 md:w-full sm:h-60 sm:w-full h-180 w-full object-cover rounded-2xl'
                  src={element.imgdata}
                  // alt={`Dish: ${element.dish}`}
                />

                <div className='flex justify-between mt-2 w-full'>
                  <h6 className='ml-2 h-12 w-50 xl:h-2 lg:h-2 md:h-2 sm:h-2  text-gray-500'> <span className='font-medium text-4xl xl:text-sm lg:text-sm md:text-sm sm:text-sm text-blue-600 '>{element.dish}</span></h6>
                  <h6 className='ml-2 font-semibold '>{element.rname}</h6>
                  <span className='xl:h-6 xl:w-12 lg:h-6 lg:w-12 md:h-6 md:w-12 sm:h-6 sm:w-12 h-10 w-16 text-xl xl:text-sm lg:text-sm md:text-sm sm:text-sm   p-0.5 rounded bg-green-600 text-white mr-2 flex items-center justify-center '>
                    {element.rating} ✩
                  </span>
                </div>

                <div className='flex justify-between w-full mt-1'>
                  <p className='ml-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-4xl text-gray-700'>{element.address}</p>
                  <span className='mr-2 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-4xl font-medium'>₹{element.price}</span>
                </div>

                <div className='w-full border-b mt-2 mb-2'></div>

                <div className='flex justify-center w-full'>
                  <button className='border xl:h-8 xl:w-15 lg:h-8 lg:w-20 md:h-8 md:w-20 sm:h-8 sm:w-20 h-12 w-20 xl:text-sm lg:text-sm md:text-sm sm:text-sm  rounded bg-blue-600 text-white hover:bg-blue-700' onClick={() => send(element)}>
                    Add
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
