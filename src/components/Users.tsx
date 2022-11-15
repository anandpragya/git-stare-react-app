import { FC } from "react";
import { JsxElement } from "typescript";
import { User } from "../interface";
interface userProps {
    users :User;
}

const Users : FC<userProps> = (props)=>{
    const{users}=props
    return(
        <div>
            
             <div className="user">
                    <a href={ `https://www.github.com/${users.login}` }>
					<img src={users.avatar_url} className="image" alt=""/>
				    </a>
				<div className="username">Most recent activity of :  <a href={ `https://www.github.com/${ users.login }` }>{users.login} </a></div>
				<div className="extraInfo">
					<div className="repos">Total Repos : {users.public_repos}</div>
                    <div className="repos">Total Gists : {users.public_gists}</div>
					<div className="followers">Followers: {users.followers}</div>
					<div className="following">Following: {users.following}</div>
                </div>
                </div>
            
        </div>
    )
}

export default Users