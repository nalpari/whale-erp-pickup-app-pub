import Footer from '@/components/ui/Footer'
import MainHeader from '@/components/main/MainHeader'
import MainContents from '@/components/main/MainContents'

export default function Home() {
  return (
    <div className="wrap">
      <MainHeader />
      <div className="main-container">
        <MainContents />
      </div>
      <Footer />
    </div>
  )
}
