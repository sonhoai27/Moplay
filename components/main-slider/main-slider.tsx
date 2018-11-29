import { ISliderItem } from "./slider-item";
import SliderItem from "./slider-item";
import { ArrayList } from "../../shared/List";
import { Fragment } from "react";

const list = [
  {
    uri: "https://go.moplay.com/img/22804/688x492@2x.png",
    info: {
      country: "Paris St-Germain",
      team: "Liverpool",
      date: "Wed, Nov 28",
      time: "20:00",
      betslip: [
        {
          key: 1,
          count: "2.0"
        },
        {
          key: 2,
          count: "3.7"
        },
        {
          key: 3,
          count: "3.15"
        }
      ]
    }
  },
  {
    uri:
      "https://cdn.moplay.co.uk/sbtech/2.11.2/assets/super-sports-banner/backgrounds/Football%2002.png",
    info: {
      country: "Paris St-Germain",
      team: "Liverpool",
      date: "Wed, Nov 28",
      time: "20:00",
      betslip: [
        {
          key: 1,
          count: "2.0"
        },
        {
          key: 2,
          count: "3.7"
        },
        {
          key: 3,
          count: "3.15"
        }
      ]
    }
  },
  {
    uri: "https://go.moplay.com/img/24654/344x246_SuperBanner_1@3x.png",
    info: {
      country: "Paris St-Germain",
      team: "Liverpool",
      date: "Wed, Nov 28",
      time: "20:00",
      betslip: [
        {
          key: 1,
          count: "2.0"
        },
        {
          key: 2,
          count: "3.7"
        },
        {
          key: 3,
          count: "3.15"
        }
      ]
    }
  }
];
export default () => {
  const checkLen = (list: ArrayList<ISliderItem>): number => {
    return list.size();
  };
  const renderListSlider = (list: ArrayList<ISliderItem>) => {
    if (checkLen(list) > 0) {
      return list.map((element, index) => {
        return <Fragment key={index}>{SliderItem(element)}</Fragment>;
      });
    }
    return "<li>NULL</li>";
  };
  return (
    <div className="overflow-hidden py-2 z-10">
      <ul
        className="
          inline-flex 
          w-full 
          list-reset 
          overflow-scroll 
          sm:overflow-hidden
        "
      >
        {renderListSlider(new ArrayList<ISliderItem>(list))}
      </ul>
    </div>
  );
};
