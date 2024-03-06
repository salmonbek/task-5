import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        fristName: "",
        lastName: "",
        group: "",
        doesWork: "",
      },
    };
  }
  handleChange = (e) => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.id]: e.target.value,
      },
    });
  };
  hendleAdd = (e) => {
    e.preventDefault();
    this.props.closeAddModal();
    this.props.addStudent(this.state.student);
    this.setState({
      student: {
        fristName: '',
        lastName: '',
        group: '',
        doesWork: false,
      }
    })
  };

  render() {
    const { addModal, closeAddModal } = this.props;
    const { fristName, lastName, group, doesWork } = this.state.student;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add contanct</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="fristName" className="form-label">
                  Fristname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fristName"
                  value={fristName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  Phone number:
                </label>

                <input
                  type="tel"
                  id="group"
                  className="form-control"
                  value={group}
                  onChange={this.handleChange}
                  name="+998"
                  placeholder="+998"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="doesWork"
                  checked={doesWork}
                  onChange={(e) =>
                    this.setState({
                      student: {
                        ...this.state.student,
                        doesWork: e.target.checked,
                      },
                    })
                  }
                />
                <label htmlFor="doesWork" className="form-check-label">
                  Male || Famale
                </label>
              </div>
              
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Concel
            </Button>
            <Button variant="primary" onClick={this.hendleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
