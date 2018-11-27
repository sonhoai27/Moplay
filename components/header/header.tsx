import HeaderTop from './top/header-top'
import MainHeader from './main/main-header'
import BottomHeader from './bottom/carousel-boxes'
export default () => (
    <>
        <div className="py-4 px-1 bg-custom-black">
        <HeaderTop/>
        <MainHeader/>
        <BottomHeader/>
        </div>
        <style jsx>{`
        .bg-custom-black {
            background: #000
        }
        `}</style>
    </>
  )