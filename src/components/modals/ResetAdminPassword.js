import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup,
  FormInput,
  FormCheckbox,
  Button
} from "shards-react";
import Modal from "../common/Modal";

const ResetAdminPassword = props => {
  const userID = props.resetPasswordUserID
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState("")
  const [disProperty, setDisProperty] = useState("none")
  const [distrueProperty, settrueDisProperty] = useState("none")

  const handleSavePassword = (id)=>{
    if(newPassword!==confirmPassword){
      return setDisProperty("block")
    }
    settrueDisProperty("block")
    console.log(`UserID numer ${id}  password Has been Changed`)
  }
  return (
    <Modal
      classNames={props.classNames}
      title="Change Admin Password"
      onClick={props.onClick}
    >
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Row form>
                {/* First Name */}
                <Col md="12" className="form-group">
                  <FormGroup>
                    <label className="d-block">
                      <strong>New Password</strong>
                    </label>
                    <FormInput
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => {setNewPassword(e.target.value)
                        setDisProperty("none")}}
                    />
                  </FormGroup>

                  <FormGroup>
                    <label className="d-block">
                      <strong>Confirm Password</strong>
                    </label>
                    <FormInput
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => {setConfirmPassword(e.target.value)
                        setDisProperty("none")}}
                    />
                  </FormGroup>
                  <p style={{color:"green",display:distrueProperty}}>Password change successfully.</p>
                  <p style={{color:"red",display:disProperty}}>Your password and confirmation password do not match.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className="mt-2 px-0">
          <Button size="md" theme="primary" onClick={(e)=>{
            e.preventDefault()
            handleSavePassword(userID)
          }}>
            Save
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Modal>
  );
};

export default ResetAdminPassword;
