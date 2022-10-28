const { createSubjectDataAccess, getSubjectsDataAccess, getSubjectsByIdDataAccess } = require('../data-access/subjects')

exports.createSubjectService = (data) => {
    const { subject } = data;
    const subjects = getSubjectsDataAccess()
    if (subjects.includes(subject)) {
        return {
            insert: false,
            message: 'Materia ya insertada anteriormente'
        }
    }
    createSubjectDataAccess(subject)
    const subjectsLastVersion = getSubjectsDataAccess()
    if (subjectsLastVersion.includes(subject)) {
        return {
            insert: true,
            message: "Insertado correctamente"
        }
    }
    return {
        insert: false,
        message: 'Ocurrio un error al insertar la materia'
    };
}

exports.getSubjectService = () => {
    const subjects = getSubjectsDataAccess();
    return subjects;
}

exports.getSubjectByIdService = (id) => {
    const subject = getSubjectsByIdDataAccess(id);
    if (subject) {
        return {
            exist: true,
            subject
        }
    }
    return {
        exist: false,
        subject: 'none'
    };
}