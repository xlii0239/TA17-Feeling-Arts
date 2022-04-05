import React from "react";

// reactstrap components
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Dropwodn1() {
  return (
    <>
      <ButtonGroup>
        <DropdownToggle caret color="primary" type="button">
          Primary
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
       </ButtonGroup>{" "}
      </>
  );
}
export default Dropwodn1;