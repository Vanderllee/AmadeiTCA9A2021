
import TopBar from '../components/TopBar'
import Main from '../components/Main'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <>
        <TopBar />

        <div>
          <Main />
          <Posts />
        </div>
    </>
  )
}
