import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="flex items-center p-16  h-screen">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-black">
                            <span className="sr-only">Error</span>4<span className='text-green-500'>0</span>4
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;