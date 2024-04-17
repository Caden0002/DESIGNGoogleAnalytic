const background = "bg-backgroundColorPrimary";


function Page1(props) {
    return (
        <div className={`relative min-h-screen flex ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl ">

                <div className="mb-4">
                Page 1
                </div>

                <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Button 1
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Button 2
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Button 3
                </button>
                </div>

            </div>
        </div>
    );
}

export default Page1;