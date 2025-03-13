import React from "react";
import Statistic from "./Statistic";

const Scores = ({courseName,courseResult}) => {
    return (
        // <main className="scores-container">
        <div class="scores">
        <h1>{courseName}</h1>

        <table>
            <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {courseResult.map((student,index)=>
            <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td className = 
                    {student.score < 50 ? "warning":" "}
                >{student.score}</td>
            </tr>
            )}
            </tbody>
            <Statistic CourseName={courseName} CourseResult={courseResult}/>
        </table>
        </div>
    // </main>
    )
};


export default Scores