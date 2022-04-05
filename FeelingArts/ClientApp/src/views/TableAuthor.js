import React, { Component } from "react";
import { render } from "react-dom";

// reactstrap components
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Progress,
    Table,
} from "reactstrap";
import Comments from "../components/index-page/Comments";

class TableAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = { author: []};
    }

    componentDidMount() {
        this.populateData();
    }

    render() {
        //let contents = this.state.author;
        let contents = this.props.showData;
        console.log("from TableAuthor", contents)
        return (
            <div className="table">
                <p>This component demonstrates fetching data from the server.</p>
            <div className="tools float-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  caret
                  className="btn-icon"
                  color="link"
                  data-toggle="dropdown"
                  type="button"
                >
                  <i className="ni ni-settings-gear-65"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem
                    className="text-danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Remove Data
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <Table responsive striped>
              <thead className="text-primary">
                <tr>
                  <th className="text-center">Name</th>
                  <th>Date Of Birth</th>
                  <th>Date Of Death</th>
                  <th>Nationality</th>
                  <th>Famous In</th>
                  <th>Masterpiece</th>
                  <th>Era</th>
                </tr>
              </thead>
              <tbody>
                {contents.map(contents =>
                  <tr key={contents.id}>
                    <td>{contents.name}</td>
                    <td>{contents.dateOfBirth}</td>
                    <td>{contents.dateOfDeath}</td>
                    <td>{contents.nationality}</td>
                    <td>{contents.famousIn}</td>
                    <td>{contents.masterpiece}</td>
                    <td>{contents.era}</td>
                  </tr>
               )}
              </tbody>
            </Table>
          </div>
        );
    }

    async populateData() {
        const response = await fetch('author');
        const data = await response.json();
        this.setState({ author: data, loading: false });
        console.log("detail", this.state.author);
    }
}

export default TableAuthor;
