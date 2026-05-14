
import './App.css'
import Sidebar from './components/menu/Sidebar'
import UserManager from './pages/UserManager'
// import { UserDashboard } from './UserDashboard'

function App() {


  return (
    <>
   {/* <UserDashboard /> */}
   <div className="grid grid-cols-6">
    <div className="col-span-1">

 <Sidebar />
    </div>
    <div className="col-span-5">
   <UserManager />
    </div>
   </div>

  
    </>
  )
}

export default App
