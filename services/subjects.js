const { createSubjectDataAccess, getSubjectsDataAccess, getSubjectsByIdDataAccess } = require('../data-access/subjects')

exports.createSubjectService = async (data) => {
    const { subject } = data;
    const subjects = await getSubjectsDataAccess()
    if (subjects.includes(subject)) {
        return {
            insert: false,
            message: 'Materia ya insertada anteriormente'
        }
    }
    await createSubjectDataAccess(subject)
    const subjectsLastVersion = await getSubjectsDataAccess()
    if (subjectsLastVersion.map(({ name }) => name).includes(subject)) {
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

exports.getSubjectService = async () => {
    const subjects = await getSubjectsDataAccess();
    return subjects.map(({ name }) => name);
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