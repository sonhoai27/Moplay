import { element } from "prop-types";

export interface IBet {
  key: number;
  count: string;
}
export interface ISliderItem {
  uri: string;
  info: {
    country: string;
    team: string;
    date: string;
    time: string;
    betslip: IBet[];
  };
}
export default (item: ISliderItem) => {
  const renderBet = (bets: IBet[]) => {
    if (bets.length > 0) {
      return bets.map((element: IBet, index: number) => {
        return (
          <div
            className="
              flex-1
              bg-white
              text-black
              text-xs
              text-center
              font-semibold
              p-3
              rounded-sm
              mr-3
              cursor-pointer
              "
            key={index}
          >
            {element.count}
          </div>
        );
      });
    }
    return "";
  };
  return (
    <li
      className="
        flex-none 
        relative
        ml-3
        overflow-hidden
        rounded-lg
        shadow
      "
      style={{ width: "90%" }}
    >
      <img src={item.uri} className="w-full" />
      <div
        className="
        w-full 
        absolute 
        pin-r 
        pin-l 
        pin-b
        p-4
        bg-black"
        style={{ background: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="flex mb-6">
          <div className="w-1/2 text-left text-white text-xs">
            <p>{item.info.country}</p>
            <p>{item.info.team}</p>
          </div>
          <div className="w-1/2 text-right text-white text-xs">
            <p>{item.info.date}</p>
            <p>{item.info.time}</p>
          </div>
        </div>
        <div className="flex">{renderBet(item.info.betslip)}</div>
      </div>
    </li>
  );
};
