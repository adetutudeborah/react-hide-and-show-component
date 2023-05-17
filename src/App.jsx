import { useState } from 'react';
import './App.css';

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [showEvents, setShowEvents] = useState(true)
  const [users, updateUsers] = useState([
    { id: 1, name: "Sophia Anderson", profilePic: "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" },
    { id: 2, name: "Isabella Sullivan", profilePic: "https://t3.ftcdn.net/jpg/04/67/95/40/360_F_467954064_qFJxeuLVPcXon6X478v9hdgHrRlNgzDB.jpg" },
    { id: 3, name: "Ava Reynolds", profilePic: "https://us.123rf.com/450wm/moremar/moremar1904/moremar190400023/moremar190400023.jpg?ver=6" },
    { id: 4, name: "Olivia Thompson", profilePic: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-shirt-is-standing-front-window_1340-37532.jpg?w=740&t=st=1684334545~exp=1684335145~hmac=b316c4064198323cc324f2e22775b43158b102469d8dc1f10c00cdc22234d642"},
    
  ])

  const handleDelete = (id) => {
    let remove = users.filter(each => each.id !== id)
    updateUsers(remove)
  }


return (
  <div className='App'>

    {showEvents && <button onClick={() => setShowEvents(false)} className="profile-btn">Hide profiles</button>}

    {!showEvents && <button onClick={() => setShowEvents(true)} className="profile-btn">Display profiles</button>}

     <div className='profile-card'>

      {showEvents &&  users.map((user) => (

          <div key={user.id}>

                <div className="card">

                    <div className="number">
                        {user.id}
                    </div>

                     <div>
                        <img className="profile-pic" src={user.profilePic} alt="profile picture" />
                    </div>

                    <div className="descr">
                        <p className="name">{user.name}</p>
                        <button className="delete-profile" onClick={()=> handleDelete(user.id)}> Delete profile</button>
                    </div>

                </div>

          </div>

        ))}
   </div>

  </div>
)

}

export default App;