export interface carousel {
    key: number;
    icon: string;
    name: string;
    number: number;
    link: string;
}
const carousels = [
    {
        key: 1,
        icon: 'https://go.moplay.com/imgs/i-v2/o/qnav/favorite.svg',
        name: 'All Sports',
        number: 69,
        link: ''
    },
    {
        key: 2,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/football.svg',
        name: 'Soccer',
        number: 17,
        link: ''
    },
    {
        key: 3,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/basketball.svg',
        name: 'Basketball',
        number: 3,
        link: ''
    },
    {
        key: 4,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/tennis.svg',
        name: 'Tennis',
        number: 32,
        link: ''
    },
    {
        key: 5,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/ice-hockey.svg',
        name: 'Ice Hockey',
        number: 12,
        link: ''
    },
    {
        key: 5,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/handball.svg',
        name: 'Handball',
        number: 3,
        link: ''
    },
    {
        key: 7,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/futsal.svg',
        name: 'Futsal',
        number: 6,
        link: ''
    },
    {
        key: 8,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/basketball.svg',
        name: 'Basketball',
        number: 3,
        link: ''
    },
    {
        key: 9,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/tennis.svg',
        name: 'Tennis',
        number: 32,
        link: ''
    },
    {
        key: 10,
        icon: 'https://go.moplay.com/imgs/i-v2/o/sport/ice-hockey.svg',
        name: 'Ice Hockey',
        number: 12,
        link: ''
    },
]
const renderListCarousel = (carousels) => {
    return carousels.map((element: carousel) => {
        return (
            <li className="
                flex-none
                w-24
                py-2
                m-auto
                border-grey-darkest
                border-r
                text-center"
            key={element.key}>
                <img src={element.icon} className="m-auto w-6 h-6"/>
                <p className="text-white text-xs mt-2 font-thin">{element.name}</p>
                <p className="hidden sm:block text-white text-xs mt-1 font-thin">{element.number}</p>
            </li>
        )
    })
}
export default () => (
    <ul className="inline-flex w-screen list-reset mt-4 overflow-scroll" style={{background: '#191919'}}>
        {renderListCarousel(carousels)}
    </ul>
  )