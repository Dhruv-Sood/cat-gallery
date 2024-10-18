"use client"

import { MagicCard } from "@/components/ui/magic-card"
import { useEffect, useState } from "react"

const page = () => {
    const [catsData, setCatsData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const imagesPerPage = 8

    const fetchCats = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            const data = await response.json();
            setCatsData(prevData => [...prevData, ...data]);
        } catch (error) {
            console.error('Error fetching cat data:', error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchCats();
    }, [])

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
        fetchCats();
    }

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentCats = catsData.slice(startIndex, endIndex);

    return (
        <div className="pt-20 px-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {currentCats.map((cat, index) => (
                    <MagicCard
                        key={startIndex + index}
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
            <div className="flex justify-center mt-8 space-x-4">
                <button 
                    onClick={handlePrevious}
                    className={`px-6 py-2 rounded-full transition-colors ${
                        currentPage === 0 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button 
                    onClick={handleNext}
                    className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default page
