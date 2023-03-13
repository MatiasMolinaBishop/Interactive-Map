import { useState } from "react"

const Profile = () => {


    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Your Requests</h1>
            <p>Hi! Soon a memeber of our tea will reach out to go over your potential order</p>
            <p>We are here to facilitate your logistics needs</p>
            {count === 0 ? <h1>Looks like you havent requested yet.</h1>: <h1>Later here we will map through the list of orders the user has made</h1>}
        </div>
    )
}

export default Profile