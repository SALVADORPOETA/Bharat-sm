import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import Hero from '@/components/Hero'
import HomeContainer from '@/components/HomeContainer'

export default function Home() {
  return (
    <main className="font-tiro">
      <Navbar />
      <Hero />
      <HomeContainer />
      <Subscribe />
      <Footer />
    </main>
  )
}
