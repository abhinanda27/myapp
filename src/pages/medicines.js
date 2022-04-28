import React from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';

import "./medicine.css";
import {AddMedicine} from './AddMedicine';



/**
 * App
 *
 * Simple react js fetch example
 */
class Medicine extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            meds: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:5000/api/Medicine')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    meds: json,
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

        const { isLoaded, meds } = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
          <div >
          <Table >
              <thead>
                  <tr>
                      <th>MedicineID</th>
                  <th>MedicineName</th>
                  <th>MedicinePrice</th>
                 
                  </tr>
              </thead>
              <tbody>
                  {meds.map(med=>
                      <tr key={med.MedicineID}>
                          <td>{med.MedicineID}</td>
                          <td>{med.MedicineName}</td>
                          <td>{med.MedicinePrice}</td>
                          <td>
<ButtonToolbar>
<Button className="mr-2" variant="info"
onClick={()=>this.setState({addModalShow:true,
  medid:med.MedicineID,medname:med.MedicineName,medprice:med.MedicinePrice})}>
      Edit
  </Button>

  <Button className="mr-2" variant="danger"
onClick={()=>this.deleteMed(med.MedicineID)}>
      Delete
  </Button>


  <Button className="mr-2" variant="danger"
onClick={()=>this.state.cart(med.MedicineID)}>
      AddToCart
  </Button>
  </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Medicine</Button>

                    <AddMedicine show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                </div >

        );

    }

}

export default Medicine;