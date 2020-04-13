import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MessagesPage = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const id = 13 || window.$user.id;
    let users = await axios.get(`http://localhost:8080/message/users/${id}`)
    setUsers(users.data);
  }

  React.useEffect(() => {
    getUsers();
    // let intId = setInterval(() => { getUsers() }, 1000);
    // return () => clearInterval(intId);
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {!!users.length && users.map((user) => (
          <Link to={{ pathname: "/chat", state: { id_user: user.email} }} style={style.link} key={user.id_message}>
            <div>
              <img src={user.icon} alt='' style={style.icon} />
              <div style={style.name}>{user.name}</div>
              <div style={style.date}>{user.last_sent_at.replace('T', ' ').replace('Z', '').split('.')[0]}</div>
              <div style={style.message}>{user.text}</div>
              <hr />
            </div>
          </Link>

        ))}
      </div>
    </div>
  )
}

const style = {
  icon: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '50%',
    position: 'relative',
    right: '160px',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },

  name: {
    position: 'relative',
    textAlign: 'left',
    left: '90px',
    top: '-52px',
    padding: 0,
    margin: 0
  },

  date: {
    position: 'relative',
    textAlign: 'right',
    right: '20px',
    top: '-75px',
    padding: 0,
    margin: 0
  },

  message: {
    position: 'relative',
    textAlign: 'left',
    left: '90px',
    top: '-72px',
    padding: 0,
    margin: 0
  }
}

export default MessagesPage
