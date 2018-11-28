import dynamic from 'next/dynamic'
import HeaderTop from './top/header-top'
import MainHeader from './main-header'
import MainSearch from '../search'

const DCWCL__BottomHeader = dynamic(
    () => import('./carousel-boxes'), {
    loading: () => <p>Loading...</p>
  })

export default () => (
    <>
        <div className="bg-custom-black overflow-hidden">
            <HeaderTop/>
            <MainHeader/>
            <DCWCL__BottomHeader/>
        </div>
        
        <MainSearch/>

        <style jsx>{`
        .bg-custom-black {
            background: #000
        }
        `}</style>
    </>
  )