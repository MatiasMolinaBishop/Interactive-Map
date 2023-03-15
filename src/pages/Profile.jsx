import { Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const Profile = ({submitted, onDelete, count}) => {
    
    let data = submitted

    const handleclick = (e) => {
        console.log(e.target.value)
        onDelete(e.target.value)
    }

    return (
        <div>
            <h1>Your Requests</h1>
            <p>Hi! Soon a memeber of our team will reach out to go over your potential order</p>
            <p>We are here to facilitate your logistics needs</p>

        {count > 0 ?
        <div className='bar-chart'>
        <BarChart
            width={400}
            height={330}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
          barSize={20}
        >
          <XAxis dataKey="company" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="spaces" fill="#18b432" background={{ fill: '#eee' }} />
        </BarChart>
        
        <img className ='profile-img' src='https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='random'/>
        </div>
        : <p></p>
        }

            <div className='locations-grid'>
              {count === 0 ? 
            <div className='norequest-message'>
            <img className ='profile-img' src='https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='random'/>
            <h1>Looks like you have no requests.</h1>
            </div>:
            
            submitted.map((location) => {
                return(
                    <div className="card" key={location.id}>
                        <h3 className='location-name'>{location.name}</h3>
                        <img className='location-img' src={location.img} alt="location" />
                        <p>City: {location.city}</p>
                        <h5>Company: {location.company}</h5>
                        <h4>Spaces Requested: {location.spaces}</h4>
                        <button value={location.company} onClick={handleclick}>Remove</button>
                    </div>
                )
            })}
        </div>
        </div>
     )
}

export default Profile