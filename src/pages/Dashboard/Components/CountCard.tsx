


const CountCard = () => {

  const CardLogo = () =>
    <div className="ml-7 w-[4rem] h-[4rem] bg-black rounded-lg shadow-lg flex items-center justify-center">
      test
    </div>

  return (
    <div className="h-[150px]">
      <div>
        <CardLogo />

      </div>
      <div className="flex flex-col h-[130px] self-end w-full bg-white  shadow-lg rounded-lg ">
      </div>
    </div>
  )
}

export default CountCard
