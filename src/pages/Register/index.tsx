
import AuthLayout from "@/Layouts/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col ">
        <div className="w-full h-[250px] bg-gray-300 rounded-lg relative" />

        <div
          className="self-center relative justify-center top-[-70px] z-10 h-[400px] w-[350px]" >

          <div className="bg-blue-500 w-[310px] rounded-lg shadow-lg mx-auto h-[100px] z-10 relative" />

          <div className="absolute h-full w-full bg-white rounded-lg shadow-xl  top-5" >

          </div>

        </div>


      </div>

    </AuthLayout>
  )
}

export default RegisterPage
