import React from 'react'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API,
})

// get all of path items
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'masterChef',
  })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

// Get path that match with
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'masterChef',
    'fields.slug': params.slug,
  })

  return {
    props: { recipe: items[0] },
  }
}

const Details = ({ recipe }) => {
  const { thumbnail, title, cookingTime, ingredients, method } = recipe.fields
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between px-4 lg:px-10 py-10">
      <div className="flex justify-center lg:justify-start">
        <Image
          alt=""
          width={600}
          height={300}
          src={`http:${thumbnail.fields.file.url}`}
          className="object-cover rounded-lg "
        />
      </div>
      <div className="flex flex-col px-4 sm:px-10 lg:px-6 pt-10 lg:pt-0">
        <div>
          <h4 className="text-2xl font-bold text-orange-500">{title}</h4>
          <div>
            <h4 className="text-lg font-bold mt-4">Time:</h4>
            <p>It take {cookingTime} minutes to cook</p>
            <h4 className="text-lg font-bold mt-4">Ingredients:</h4>
            <ul className="list-disc pl-4">
              {ingredients.map((item) => (
                <li key={item} className="leading-8">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-1 lg:col-span-2 px-4 sm:p-10">
        <h4 className="text-lg font-bold mt-4">Method:</h4>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  )
}

export default Details
