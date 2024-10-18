import Spline from '@splinetool/react-spline/next';
import HyperText from './ui/hyper-text';
import WordPullUp from './ui/word-pull-up';
import Link from 'next/link';

export default function Cat3d() {
    return (
        <main className="h-screen w-screen relative">
            <div className="absolute top-40 left-0 right-0 text-center">
                {/* <h1 className="text-4xl font-bold text-white">Imagine cats like never before</h1> */}
                
                <WordPullUp
                    className="text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-7xl md:leading-[5rem]"
                    words="Imagine Cats Like Never Before!!"
                />
            </div>
            <Spline
                scene="https://prod.spline.design/5D4YbYDhmPBudG7Y/scene.splinecode"
                className="w-full h-full"
            />
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
                <Link href="/grid">
                    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                        Grid Layout
                    </button>
                </Link>
                <Link href="/scroll">
                    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                        Infinite Scroll
                    </button>
                </Link>
                
            </div>
        </main>
    );
}
