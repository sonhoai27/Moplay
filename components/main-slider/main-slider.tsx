import { number } from "prop-types";

const list = [
    {
        uri: 'https://go.moplay.com/img/22804/688x492@2x.png',
        info: {
            country: 'Paris St-Germain',
            team: 'Liverpool',
            date: 'Wed, Nov 28',
            time: '20:00',
            betslip: [
                {
                   key: 1,
                   count: 2.0 
                },
                {
                    key: 2,
                    count: 3.70 
                 },
                 {
                    key: 3,
                    count: 3.15
                 }
            ]
        }
    },
    {
        uri: 'https://cdn.moplay.co.uk/sbtech/2.11.2/assets/super-sports-banner/backgrounds/Football%2002.png',
        info: {
            country: 'Paris St-Germain',
            team: 'Liverpool',
            date: 'Wed, Nov 28',
            time: '20:00',
            betslip: [
                {
                   key: 1,
                   count: 2.0 
                },
                {
                    key: 2,
                    count: 3.70 
                 },
                 {
                    key: 3,
                    count: 3.15
                 }
            ]
        }
    },
    {
        uri: 'https://go.moplay.com/img/24654/344x246_SuperBanner_1@3x.png',
        info: {
            country: 'Paris St-Germain',
            team: 'Liverpool',
            date: 'Wed, Nov 28',
            time: '20:00',
            betslip: [
                {
                   key: 1,
                   count: 2.0 
                },
                {
                    key: 2,
                    count: 3.70 
                 },
                 {
                    key: 3,
                    count: 3.15
                 }
            ]
        }
    }
]
export default ()=> {
    const checkLen = (list): number => {
        return list.length
    }
    const renderListSlider = (list: any) => {
        if(checkLen(list) > 0) {
            return ''
        }
        return '<li>NULL</li>'
    }
    <div className="flex overflow-hidden">
        <ul className="w-full list-reset">
            {renderListSlider(list)}
        </ul>
    </div>
}