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
                <div className="event-typebox" key ={item.id}>
                  <div>{item.type}</div>
                  <div className="repo-name"><a href={`https://www.github.com/${ item.repo.name}`}>{item.repo.name}</a></div>
                  <div className="date">{new Date(item.created_at).toLocaleString()}</div>

                 {(()=>{switch(item.type)
                {case 'PushEvent':return(<div className="commit"><a href={`https://github.com/${item.repo.name}/commit/${item.payload.commits ?
                 item.payload.commits[0]?.sha : null}`} target = '_blank'>
                    {item.payload.commits ? item.payload.commits[0].message : null}</a></div>)
                 case 'CreateEvent': return(<div className="commit"><a href={`https://github.com/${item.repo.name}`} target = '_blank'>
                    {item.repo.name}</a></div>)
                 case 'MemberEvent':   return(<div className="commit"><a href={`https://github.com/${item.repo.name}`} target = '_blank'>
                 {item.repo.name}</a></div>)
                  case 'DeleteEvent':   return(<div className="commit"><a href={`https://github.com/${item.repo.name}`} target = '_blank'>
                  {item.repo.name}</a></div>)
                 case 'ForkEvent': return(<div className="commit"><a href={`https://github.com/${item.repo.name}`}target = '_blank'>
                 {item.repo.name}</a></div>)
                 case 'PullRequestEvent':return(<div className="commit">
                    <a href={`https://github.com/${item.repo.name}/pull/1`} target = '_blank'>Watch pull request</a>
                 <a href={`https://github.com/${item.repo.name}/pull/1/files`} target = '_blank'>Watch difference</a>
                 </div>)
                     default: {console.log("inavlid Event")    
                     break;}}})()} 
                </div>
               
               )
        
        })}
        </div>
    )
}
export default Events