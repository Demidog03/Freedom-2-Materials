
const StudentInfo = ({ studentIndex, name, lesson, deleteStudent }) => {

    return (
        <div style={{ border: '1px solid black', marginBottom: 8, position: 'relative' }}>
            <h1>{name}</h1>
            <h2>Изучает урок: {lesson}</h2>
            <button
                style={{ position: 'absolute', top: 5, right: 5 }}
                onClick={() => deleteStudent(studentIndex)}
            >
                Удалить
            </button>
        </div>
    );
}

export default StudentInfo;
