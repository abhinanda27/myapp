import React from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';





/**
 * App
 *
 * Simple react js fetch example
 */
class Home extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            users: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:5000/api/AdminUser')
            .then(res => res.json())
            .then(json => {
                this.setState({
                  users: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, users } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
          <div >
          <Table >
              <thead>
                  <tr>
                  <th>UserID</th>
                      <th>FirstName</th>
                  <th>LastName</th>
                  <th>EMail</th>
                  <th>Password</th>
                  <th>DOB</th>
                  <th>Phone</th>
                  <th>Address</th>
                 
                  </tr>
              </thead>
              <tbody>
                  {users.map(user=>
                      <tr key={user.UserID}>
                          <td>{user.UserID}</td>
                          <td>{user.FirstName}</td>
                          <td>{user.LastName}</td>
                          <td>{user.Email}</td>
                          <td>{user.Pasword}</td>
                          <td>{user.DateOfBirth}</td>
                          <td>{user.Phone}</td>
                          <td>{user.Address}</td>
                          <td>
<ButtonToolbar>
<Button className="mr-2" variant="info"
onClick={()=>this.setState({editModalShow:true,
  userid:user.UserID,username:user.FirstName,userlname:user.LastName,useremail:user.Email,userpwd:user.Pasword,userdob:user.DateOfBirth,userphone:user.Phone,useraddress:user.Address})}>
      Edit
  </Button>

  <Button className="mr-2" variant="danger"
onClick={()=>this.deleteMed(user.UserID)}>
      Delete
  </Button>

  </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>
                </div >

        );

    }

}

export default Home;