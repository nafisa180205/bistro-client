import React from 'react';

const Spinner = () => {
    return (
        <div className='min-h-[calc(100vh-500px)] flex justify-center items-center'>
            <button type="button" className="bg-indigo-500 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    {/* <!-- ... --> */}
                </svg>
                Processing...
            </button>
        </div>
    );
};

export default Spinner;