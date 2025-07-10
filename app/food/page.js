"use client";
import { useState } from "react";
import Header from "../components/header";
import data from './data.json';
import Link from "next/link";

const FoodApi = () => {
  const [val, setVal] = useState(0);
  const handleNext = () => {
    if (val + 4 < data.length) setVal(val + 1);
  };

  const handlePrev = () => {
    if (val > 0) setVal(val - 1);
  };

  var foods=data.slice(val, val + 4);

  return (
    <div className="bg-gray-300 pb-15 min-h-screen">
      <Header />

      <div className="relative">
        <div className="flex items-center justify-between mb-4 px-6 mt-2">
          <h1 className="font-bold text-2xl m-auto">Top Restaurant Chains in Kovai</h1>
          <div className="flex gap-4">
            <button 
              className="rounded-full w-8 h-8 text-center border bg-white border-black"
              onClick={handlePrev}
            >
              {'<'}
            </button>
            <button 
              className="rounded-full w-8 h-8 text-center border bg-white border-black"
              onClick={handleNext}
            >
              {'>'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 px-6">
          {foods.map((item, i) => (
            <div key={i} className="bg-white  rounded-xl shadow-md">
              {
                <Link href={`/food/${item.id}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                </Link>

              }
              <h2 className="text-lg font-semibold">{item.shop}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl relative top-10 left-30">Restaurants with online Food delivery in Noida</h1>

        <div className="grid grid-cols-4 relative top-15">
          {data.map((el,i)=>{
            {
              return <div key={i} className="mx-10 my-3 w-70 bg-gray-400 text-white">
                {
                  console.log(el)
                }
                <Link 
                  href={`/food/${el.id}`}
                >
                <img src={el.image} alt=""  className="w-60 ml-5 mt-2 h-40 cursor-pointer hover:scale-103 "/>
                </Link>
                <div className="relative left-5">
                  <h1>{el.shop}</h1>
                <p>{el.name}</p>
                <p>&#8377; {el.price} </p>
                <div className="flex py-3">
                   <h4 className="px-5 border-1 rounded-3xl bg-green-300 text-black ">Rating :{el.rating}</h4>
                    <p className="relative left-10">{el.prepTime}</p>
                </div>
                </div>
              </div>
            }
          })}

        </div>
      </div>
    </div>
  );
};

export default FoodApi;
