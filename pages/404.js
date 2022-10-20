import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
  const [counter, setCounter] = useState(4)
  const router = useRouter()

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])
  console.log(counter)

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  })

  return (
    <div className=" w-full h-[74vh] relative">
      <div className="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4">
        <h1>404</h1>
        <h2>Opps! That page cannot be found :(</h2>
        <p>The website will be redirect to homepage after {counter} seconds</p>

        <p>
          Or click to
          <Link href="/">
            <a className="text-orange-500 font-medium hover:underline">
              {' '}
              here{' '}
            </a>
          </Link>
          to go now!
        </p>
      </div>
    </div>
  )
}

export default NotFound
