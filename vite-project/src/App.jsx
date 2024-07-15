import React, { useState, useReducer } from "react";
import Student from "./Student";

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      // eslint-disable-next-line no-case-declarations
      const newStudent = {
        id: Date.now(),
        name: action.payload.name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <div>총 학생 수 : {studentsInfo.count}</div>
      <input onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() =>
          dispatch({
            type: "add-student",
            payload: { name },
          })
        }
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            dispatch={dispatch}
            isHere={student.isHere}
          ></Student>
        );
      })}
    </>
  );
};

export default App;
