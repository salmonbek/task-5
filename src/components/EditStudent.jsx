import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class EditStudent extends Component {
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
  hendleEdit = (e) => {
    e.preventDefault();
    this.props.closeAddModal();
    this.props.addStudent(this.state.student);
    this.setState({
      student: {
        fristName: "",
        lastName: "",
        group: "",
        doesWork: false,
      },
    });
  };

  componentDidMount(){
    const {id, ...rest} = this.props.studentEditing || {};
    this.setState({student: rest});
  }

  render() {
    const { editModal, closeEditModal } = this.props;
    const { fristName, lastName, group, doesWork } = this.state.student;
    return (
      <div>
        <Modal show={editModal} onHide={closeEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add student</Modal.Title>
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
                <select
                  className="form-select"
                  id="group"
                  value={group}
                  onChange={this.handleChange}>
                  <option value="React-N32">React-N32</option>
                  <option value="React-N45">React-N45</option>
                  <option value="React-N58">React-N58</option>
                  <option value="React-N38">React-N38</option>
                </select>
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
                  Does work ?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEditModal}>
              Concel
            </Button>
            <Button variant="primary" onClick={this.hendleEdit}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditStudent;
