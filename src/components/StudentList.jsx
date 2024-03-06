import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students, deleteStudent, editStudent } = this.props;
    return (
      <div className="box-list">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fristname</th>
              <th>Lastname</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.fristName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork ? "Male" : "Female"}</td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => editStudent(student.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
