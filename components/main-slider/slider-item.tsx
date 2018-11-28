interface IBet {
    key: number;
    count: string;
}
interface ISliderItem {
    uri: string;
    info: {
        country: string;
        team: string;
        date: string;
        time: string;
        betslip: IBet[]
    }
}
export default (item: ISliderItem) => {
    const renderBet = (bets: IBet[])=> {
        if(bets.length > 0){
            return bets.map((element: IBet, index: number) => {
                return (
                    <div key={index} className="">{element.count}</div>
                )
            })
        }
        return ''
    }
    return (
        <li className="flex-none w-full relative">
            <img src=""/>
            <div className="w-full absolute pin-r pin-l pin-b">
                {renderBet(item.info.betslip)}
            </div>
        </li>
    )
}