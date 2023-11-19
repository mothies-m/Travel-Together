import LoginBox from "../LoginBox"
export default function Home(){
    return(
      <div className='flex w-full h-[calc(100%-200px)] justify-center items-center text-white'>
              <div className='flex w-full justify-center items-center md:justify-around flex-col md:flex-row'>
                <h1 className='font-Recursive text-2xl md:text-6xl text-center md:text-start md:w-[530px]'>Explore the world with exciting people</h1>
                <LoginBox />
              </div>
      </div>
    )
  }
  