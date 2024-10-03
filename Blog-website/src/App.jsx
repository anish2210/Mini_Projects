
import MyState from "./Context/data/MyState";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Component/Layout/Layout";
import { Navigate } from "react-router-dom";
function App() {
  return (
<MyState>
  <Layout/>
  <Toaster/>
</MyState>
   
  )
}

export default App
export const ProtectedRoute=({children})=>{
const admin=JSON.parse(localStorage.getItem("admin"));
if(admin?.user?.email==="dreamerinfotech.monika@gmail.com"){
  return children
}
else{
  return <Navigate to={"/adminlogin"}/>
}
}