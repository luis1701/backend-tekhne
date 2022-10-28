const subjects = [];

exports.createSubjectDataAccess = (subject) => {
    subjects.push(subject)
}

exports.getSubjectsDataAccess = (subject) => {
    return subjects
}

exports.getSubjectsByIdDataAccess = (id) => {
    return subjects.find((value) => value === id)
}