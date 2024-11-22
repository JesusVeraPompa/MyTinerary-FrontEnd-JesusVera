import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function RegisterRoute({children}) {

    setTimeout(function(){
        console.log("Hola Mundo");
        alert("Hola Mundo");
    }, 1000);


    const registerStore = useSelector((state) => state.registerStore)
    const data = registerStore.data
    
    if(data === 'User registered successfully')
        return <Navigate to="/MyTineraryJesusVera/sign-in" replace></Navigate>
    return children
}


export default RegisterRoute; 