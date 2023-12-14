import headerImg1 from "../assets/girl-with-books.png";

const Header = () => {
    return(
        <>
        <div className="flex justify-between h-fit">

            <div className="w-1/2 p-5 mt-5 flex items-center flex-col justify-center">

                <div className="text-primary">
                    <h1 className="text-3xl font-bold mb-5">Explore Courses at <br></br> India's Best IAS Coaching</h1>
                    <p className="text-sm">Lorem Ipsum has been the industry's aurvived not only typesetting .It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>


                <div className="flex space-between gap-6 mt-12">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                
            </div>

            

            <div className="w-1/2 p-5">
                <img className="object-cover" src={headerImg1} alt="image of a girl holding books"/>
            </div>

        </div>
        </>
    )
}

const Cards = () => {
    return (
        <>
        
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-md px-6 pt-6 pb-3 w-auto relative">
                <span className="absolute right-1/2 rounded top-0 -m-5 text-white bg-custom-blue px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </span>
                <span className="text-primary text-4xl text-center font-bold mb-0 ">04</span>
                <span className="text-sm text-custom-dark-gray">in top 10</span>
            </div>
    
        </>
    )
}


export default Header