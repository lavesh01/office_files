import logo from "../assets/logo.png";

const Navbar = () => {
    return(
        <>
        <header className="flex justify-between h-14 border border-gray-300">
            <div className="h-auto flex items-center">
                <a href="" className="flex items-center w-32">
                    <img className="object-cover" src={logo} alt="logo"/>
                </a>
            </div>
  
            <div className='font-bold text-primary flex items-center gap-4  py-2 px-4'>
                
              <div>Courses</div>
              <div>Test Series</div>
              <div>Current Affairs</div>
              <div>Student Corner</div>
              <div>Centers</div>
               
            </div >

            <div className="flex gap-2 justify-between items-center">
                <div className='text-sm bg-custom-gray text-custom-dark-gray flex items-center gap-2 rounded-lg py-2 px-2 pr-14'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    Search
                </div>
    
                <div className='text-custom-red flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                </div>

                
                <div className='bg-custom-red text-white flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4'>
                    <span className="text-sm">
                        Student Login
                    </span>
                </div>
            </div>
            
        </header>
        </>
    )
}


export default Navbar