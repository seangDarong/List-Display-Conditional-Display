import React from "react";

const Statistic = ({courseName,CourseResult}) => {

    function average (){
        let sum = CourseResult.reduce((acc,student)=> acc + student.score,0);
        let avg = sum / CourseResult.length;
        return avg.toFixed(2);
    }

    function min (){
        return CourseResult.reduce((minValue,student)=> student.score < minValue ? student.score : minValue, Infinity);
    }
    function max (){
        return CourseResult.reduce((maxValue,student)=> student.score > maxValue ? student.score  :maxValue, -Infinity);
    }


    return (
        <div className="statistic-container">
            <p>Average: {average()}</p>
            <p>min: {min()}</p>
            <p>max: {max()}</p>
        </div>
    )
};

export default Statistic;