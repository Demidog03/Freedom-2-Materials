import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";

const initialStudents = [
    {
        name: 'Серик',
        lesson: 'DOM'
    },
    {
        name: 'Саня',
        lesson: 'React'
    }
    ,
    {
        name: 'Дина',
        lesson: 'Angular'
    },
    {
        name: 'Гульжан',
        lesson: 'Promise'
    },
    {
        name: 'Гульмира',
        lesson: 'Event loop'
    },
    {
        name: 'Гульнар',
        lesson: 'Асинхронность'
    },
    {
        name: 'Сабит',
        lesson: 'Next.js'
    },
    {
        name: 'Медеу',
        lesson: 'Vue.js'
    },
    {
        name: 'Али',
        lesson: 'Jquery'
    }
]

const ListComponent = () => {
    const [students, setStudents] = useState(initialStudents)

    function deleteStudent(deleteIndex) {
        setStudents(students.filter((student, index) => index !== deleteIndex)) // вот тебе реакт новые студенты (отфильтрованные)
    }

    useEffect(() => {
        console.log(students);
    }, [students])

    return (
        <div>
            {students.map((student, index) => (
                <StudentInfo key={index} studentIndex={index} name={student.name} lesson={student.lesson} deleteStudent={deleteStudent} />
            ))}
        </div>
    );
}

export default ListComponent;
