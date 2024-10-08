import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      {/* <Trending /> */}
      <Trending />
    </div>
  )
}

export default Home
