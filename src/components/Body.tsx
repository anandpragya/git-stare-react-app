import { FC, KeyboardEventHandler,KeyboardEvent, useState } from "react";
import { JsxElement } from "typescript";
import { Event,User } from "../interface";
import Events from "./Events";
import Users from "./Users";
import axios from "axios"
import userProps from './Users'


const Body : FC = ():JSX.Element=>{
    const[events,Setevents]=useState<Event[]>([])
    const[userDetais,setUserDetails]=useState<User[]>([])
    const [username, setUsername] = useState('')

    const handleEnter : KeyboardEventHandler = async(e :KeyboardEvent<HTMLInputElement>)=>{
        if(e.code !== 'Enter') return
        const inputStr :string = e.currentTarget.value
        e.currentTarget.value = '';
        setUsername(inputStr)
        try{
            const eventResponse = await axios.get<Event[]>(`https://api.github.com/users/${ inputStr}/events`,{
                headers:{
                    "Content-type":"application/json"
                }
            })
            const userResponse=await axios.get(`https://api.github.com/users/${inputStr }`)
            setUserDetails(userResponse.data)
            Setevents(eventResponse.data)
            console.log(userResponse.data)
        }
        catch(e){
            if (axios.isAxiosError(e)) {
				console.log('No matching username')
			} else {
				console.log('unknown error')
			}
        }
        
    }
    // const userProps = {
    //     displayName: userDetais?.name,
    //     userName: username,
    //     imgUrl: userDetais?.avatar_url,
    //     repos: userDetais?.public_repos,
    //     followers: userDetais?.followers,
    //     following: userDetais?.following,
    //     // gists:userDetais?.public_gists
    // }
    return(
        <div>
            <div className="search">
                <input type="text" placeholder="Enter Git Username..." onKeyDown={handleEnter} />
            </div>
            {username && <Users users=  {userDetais}/>}
            <div className="activity">
					
					<Events events={events}></Events>
				</div>
        </div>
    )
}

export default Body