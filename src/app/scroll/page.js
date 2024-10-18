"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { MagicCard } from "@/components/ui/magic-card"
import { UniqueLoaderJsx } from "@/components/unique-loader"


const Page = () => {
  const [catsData, setCatsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const loader = useRef(null)

  const fetchCats = async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&page=${page}`)
      const data = await response.json()
      if (data.length === 0) {
        setHasMore(false)
      } else {
        setCatsData(prevData => [...prevData, ...data])
        setPage(prevPage => prevPage + 1)
      }
    } catch (error) {
      console.error('Error fetching cat data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCats()
  }, [])

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting && !isLoading) {
      fetchCats()
    }
  }, [isLoading, fetchCats])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
    return () => {
      if (loader.current) observer.unobserve(loader.current)
    }
  }, [handleObserver])

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catsData.map((cat) => (
          <MagicCard
            key={cat.id}
            className="cursor-pointer shadow-2xl aspect-square overflow-hidden"
            gradientColor={"#D9D9D955"}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={cat.url}
                alt="Cat"
                className="w-full h-full object-cover"
              />
            </div>
          </MagicCard>
        ))}
      </div>
      {isLoading && <p className="text-center mt-4">Loading more cats...</p>}
      {!isLoading && hasMore && <div ref={loader} className="h-10" />}
      {!hasMore && <p className="text-center mt-4">No more cats to load</p>}
    </div>
  );
}

export default Page