import { useState } from "react"

interface IUserData {
   email:string,
   password:string
}

const useInputValue = () => {
   const [value, setValue] = useState<IUserData>();
   return {value,setValue}
}

export default useInputValue
