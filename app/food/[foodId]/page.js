"use client";
import { useParams } from "next/navigation"
import data from '../data.json'
import Header from '../../components/header'
import Link from "next/link";
const Food = () => {
    const params=useParams();
    const fooddetails=data[params.foodId]
    console.log(fooddetails.shop)
    const slicedata=data.slice(0,8);
    console.log(slicedata);
  return (
    <div className="bg-gray-50 w-315">
      <Header></Header>
      <hr className="text-gray-300 border-2 rounded-full "/>
      <div className="absolute left-50 top-30 w-180 bg-gray-50">
          <h1 className="text-2xl font-bold my-3">{fooddetails.shop}</h1>

          <div className="flex gap-10">
            <h3 className="">Order Online <hr className='text-orange-400 border-1'/></h3>
            <h2>Dine Out</h2>
          </div>
          <div className="border-1 border-gray-200">
              <div className="flex gap-5 bg-orange-200 text-orange-800">
                  <h1>{fooddetails.name}</h1>
                  <h2 className="ml-30">Preparation Time:{fooddetails.prepTime}</h2>
              </div>
              <div className="flex">
                 <h1>{fooddetails.rating}</h1>
                  <h1>(ratings{'->'} {fooddetails.reviews})</h1>
                  <h1 className="relative left-10"> &#8377;{fooddetails.price}</h1>
              </div>
              <h1>Category : {fooddetails.category}</h1>
              <h1>Special Style : {fooddetails.location}</h1>
              <h1 className="flex gap-2">Type : {
                 fooddetails.veg?(<p>Veg</p>):(<p>Non Veg</p>)
                }
              </h1>
          </div>
          <div className="mt-10 ">
                <h1 className="text-2xl font-bold">Recommended(8)</h1>
                {
                  slicedata.map((el, i)=>{
                    return <div key={i} className="flex gap-10 m-5 bg-gray-100 p-4" >
                      <div>
                        <h1>{el.name}</h1>
                        <h1> &#8377;{el.price}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos.</p>
                      </div>
                      <div><Link href={`/food/${el.id}`}><img src={el.image} className="w-20 h-30 hover:scale-105"/></Link></div>
                    </div>
                  })
                }
          </div>
      </div>
      <div className="absolute left-185 top-33 hover:scale-103">
        <img src={fooddetails.image} className="w-40 h-45" />
      </div>
    </div>
  )
}

export default Food