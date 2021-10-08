import TopBar from '../components/TopBar'
import Sidebar from '../components/SideBar'
import Header from './Header'
import Posts from './Posts'

export default function Main() {
    return (
        <>

            <Header />

            <div>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}