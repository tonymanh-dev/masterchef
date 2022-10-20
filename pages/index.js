import React from 'react'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API,
  })

  const res = await client.getEntries({ content_type: 'masterChef' })

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  }
}

const Recipe = ({ recipes }) => {
  return (
    <div className="py-10 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {recipes.map((item) => (
          <RecipeCard key={item.sys.id} recipe={item} />
        ))}
      </div>
    </div>
  )
}

export default Recipe
