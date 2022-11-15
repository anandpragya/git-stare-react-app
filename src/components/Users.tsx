import { FC } from "react";
import { JsxElement } from "typescript";
import { User } from "../interface";
interface users {
    users :User[]
}
// interface userProps {

// 	displayName: string | undefined,
// 	imgUrl: string | undefined,
// 	repos: number | undefined,
// 	followers: number | undefined,
// 	following: number | undefined,
// 	userName: string | undefined,
//     gists:number |undefined
// }
const Users : FC<users> = ({users}):JSX.Element=>{
    return(
        <div>
            {/* <h1>{avatar_url}</h1> */}
            

                {/* <div className="user">
                    <a href={ `https://www.github.com/${props.userName}` }>
					<img src={props.imgUrl} className="image" alt=""/>
				    </a>
				<div className="username">Most recent activity of :  <a href={ `https://www.github.com/${ props.userName }` }>{props.userName} </a></div>
				<div className="extraInfo">
					<div className="repos">Total Repos : {props.repos}</div>
                    <div className="repos">Total Gists : {props.gists}</div>
					<div className="followers">Followers: {props.followers}</div>
					<div className="following">Following: {props.following}</div>
                </div>
                </div> */}
            
        </div>
    )
}

export default Users