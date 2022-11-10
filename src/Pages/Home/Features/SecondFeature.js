import React from 'react';

const SecondFeature = () => {
    return (
        <div>
            <section className="p-4 lg:p-8">
            <h1 className='text-center text-4xl font-bold mb-12 text-red-600'>QNA Section</h1>
                <div className="container mx-auto space-y-12">
                    <div className="bg-gray-200 hover:bg-gray-300 flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row">
                        <img src="https://i.postimg.cc/9Q8stc3M/istockphoto-1366052585-170667a.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <span className="text-xs uppercase text-gray-600">Join, me Now.</span>
                            <h3 className="text-3xl font-bold text-violet-600">Can I get fit?</h3>
                            <p className="my-6 text-gray-700">Yes, you can. You just need to follow your diet.
                            and work hard</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 hover:bg-gray-300 flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row-reverse">
                        <img src="https://i.postimg.cc/W1FwCVFt/Working-Out-to-Get-Shredded3.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <span className="text-xs uppercase text-gray-500">Join, me Now.</span>
                            <h3 className="text-3xl font-bold text-violet-600">Can I get Shredded?</h3>
                            <p className="my-6 text-gray-700">Getting shredded requires a combination of building muscle and losing fat, so depending on where you are in your fitness journey, this can take a while. There is no quick fix for getting defined abs; you cannot spot reduce fat or out-train a crappy diet.</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 hover:bg-gray-300 flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row">
                        <img src="https://i.postimg.cc/FRRRCrzB/How-to-Reduce-Belly-Fat-1.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <span className="text-xs uppercase text-gray-600">Join, me Now.</span>
                            <h3 className="text-3xl font-bold text-violet-600">Can I remove my belly fat ?</h3>
                            <p className="my-6 text-gray-700">A combination of exercise and the right diet will help you lose the abdominal fat that's linked to a higher risk of heart disease.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondFeature;