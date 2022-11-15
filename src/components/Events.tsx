import { FC } from "react";
import { JsxElement } from "typescript";
import { Event } from "../interface";

interface EventProps {
    events : Event[]
}

const Events : FC<EventProps> = ({events}):JSX.Element=>{
    return(
        <div>
        {events.map(item=>{
         return (
          <div className="event-typebox">
            <div>{item.type}</div>
            <div className="repo-name"><a href={`https://www.github.com/${ item.repo.name}`}>{item.repo.name}</a></div>
            <div className="date">{new Date(item.created_at).toLocaleString()}</div>
          </div>
         
         )
        })}
        </div>
    )
}
export default Events