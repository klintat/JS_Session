import React from 'react'
import Input from './Input'

class Names extends React.Component {
    constructor() {
        super();
        this.state = {
            names: []
        }


        let self = this;
        fetch("http://localhost:5000/get-names", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(json => {
                    self.setEntries(json.response);
                })
            }
        })
    }

    setInitalValues = () => {
        
    }

    setEntries = (values) => {
        this.setState({ names: values })
    }

    setChanged = (values) => {
        this.setState({ namesChanged: values })
    }

    onChnage = (event, id, name) => {
       if(fieldName=== "name"){
           this.states.name.find(obj => {
                return obj.ID === id 
           }).lastname = event.traget.value;
       }
       else if (name === "lastname") {
        this.states.name.find(obj => {
            return obj.ID === id 
       }).lastname = event.traget.value;
       }

    render() {
        return (

            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Last Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!(this.state.names === undefined) && this.state.names.map((item) => {
                        return (
                            <tr key={item.ID}>
                                {/* <td>{item.name}</td>
                                <td>{item.lastname}</td> */}

                                <td>
                                    <Input initValue={item.name} onChange={this.onChange} id={item.ID} fieldName="name"></Input>
                                </td>
                                <td>
                                    <Input initValue={item.lastname} onChange={this.onChange} id={item.ID} fieldName="lastname"></Input>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Names;