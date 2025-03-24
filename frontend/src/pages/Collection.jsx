import React from 'react'

const Collection = () => {
  return (
    <>
      <div className="absolute w-full bg-red-500 pt-100">
        <h1 className="p-4 text-white flex w-full justify-center bg-green-500 text-2xl">Collections Page</h1>
        <div className="flex text-xl text-black p-4">
          <div className="flex-1">Linen Section</div>
          <div className="flex-1">Tracksuits Section</div>
          <div className="flex-1">Outerwear Section</div>
        </div>
      </div>
    </>
  )
}

export default Collection
