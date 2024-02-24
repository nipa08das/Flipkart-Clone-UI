import React from 'react'

const Card = ({name,value}) => {
  return (
    <div className="size-full flex justify-center items-center">
              <ul className="space-y-5">
                <li>
                  <p className="text-slate-800">{name}</p>
                </li>
                <li>
                  <p className=" text-gray-500 text-center">{value}</p>
                </li>
              </ul>
            </div>
  )
}

export default Card