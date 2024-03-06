import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      editModal: false,
      students: [
        {
          id: 1,
          fristName: "Abror",
          lastName: "Mansurov",
          group: "+998931461602",
          doesWork: true,
        },
        {
          id: 2,
          fristName: "Guli",
          lastName: "Umarova",
          group: "+99890215767",
          doesWork: false,
        },
        {
          id: 3,
          fristName: "Salmon",
          lastName: "Akbarov",
          group: "+998900343877",
          doesWork: false,
        },
      ],
      studentEditing: null,
      search: "",
      filter: "",
      filteredStudens: [],
    };
  }
  closeAddModal = () => this.setState({ addModal: false });
  openAddModal = () => this.setState({ addModal: true });
  closeEditModal = () => this.setState({ editModal: false });
  openEditModal = () => this.setState({ editModal: true });

  addStudent = (student) => {
    const newStudents = [
      ...this.state.students,
      { ...student, id: this.state.students.length + 1 },
    ];

    this.setState({
      students: newStudents,
      filteredStudens: newStudents,
    });
  };

  deleteStudent = (studentId) => {
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== studentId
      ),
    });
  };

  editStudent = (studentId) => {
    this.openEditModal();
    const student = this.state.students.find(
      (student) => student.id === studentId
    );
    this.setState({
      studentEditing: student,
    });
  };

  handleSearchChange = (e) => {
    const text = e.target.value;
    this.setState({ search: text });
    this.setState({
      filteredStudens: this.state.students.filter(
        (student) =>
          student.fristName.toLowerCase().includes(text.toLowerCase()) ||
          student.lastName.toLowerCase().includes(text.toLowerCase()) ||
          student.group.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  handleFilterChange = (e) => {
    const group = e.target.value;
    this.setState({
      filter: group,
    });
    let filtered;
    if (group === "All") {
      filtered = this.state.students;
    } else {
      filtered = this.state.students.filter(
        (student) => student.group === group
      );
    }
    this.setState({
      filteredStudens: filtered,
    });
  };

  componentDidMount() {
    this.setState({
      filteredStudens: this.state.students,
    });
  }

  render() {
    const {
      search,
      filter,
      filteredStudens,
      addModal,
      editModal,
      studentEditing,
    } = this.state;
    const {
      closeAddModal,
      openAddModal,
      closeEditModal,
      openEditModal,
      editStudent,
      deleteStudent,
      handleSearchChange,
      handleFilterChange,
    } = this;
    return (
      <div className="container py-3">
        <div>
          <ButtonGroup className="w-100">
            <input
              type="text"
              placeholder="Search"
              className="form-control p-2"
              id="search"
              value={search}
              onChange={handleSearchChange}
            />

            <button
              className="btn btn-outline-success w-auto"
              onClick={openAddModal}
            >
              Add
            </button>
          </ButtonGroup>
        </div>
        <StudentList
          students={filteredStudens}
          deleteStudent={deleteStudent}
          openEditModal={openEditModal}
          editStudent={editStudent}
        />
        <AddStudent
          addModal={addModal}
          closeAddModal={closeAddModal}
          addStudent={this.addStudent}
        />
        <EditStudent
          studentEditing={studentEditing}
          editModal={editModal}
          closeEditModal={closeEditModal}
        />
      </div>
    );
  }
}

export default Students;
