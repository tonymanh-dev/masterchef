import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-lg">
      <div>
        <Image
          alt=""
          width={600}
          height={400}
          src={`http:${thumbnail?.fields.file.url}`}
          className="rounded-lg"
        />
      </div>
      <div className="bg-white w-full p-4 -mt-4 z-10 rounded-b-lg">
        <div>
          <h4 className="text-md text-gray-800 font-bold">{title}</h4>
          <p className="text-sm my-2">{cookingTime} minutes ⏰</p>
        </div>
        <Link href={`/recipes/${slug}`}>
          <button className="w-full my-4 py-3 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full text-white font-bold text-lg hover:opacity-90">
            Cook now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
