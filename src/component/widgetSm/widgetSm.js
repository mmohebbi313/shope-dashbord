import React  , { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { Members } from "../../datas";
import "./widgetSm.css";


export default function WidgetSm() {

  let [dadtaSm , setDataSm] = useState([])
  let watchData = dadtaSm.slice(0,5)

  fetch('https://api.escuelajs.co/api/v1/users')
  .then(res => res.json())
  .then(data => setDataSm(data))

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        
        {watchData.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.avatar} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.name}</span>
              <span className="widgetSmUserTitle">{user.role}</span>
            </div>
            <button className="widgetSmButton">
              <MdOutlineVisibility className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
