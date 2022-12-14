const { createSubjectService, getSubjectService, getSubjectByIdService } = require('../services/subjects')

exports.createSubjectController = async (req, res) => {
  try {
    const { body } = req;
    const createSubjectRes = await createSubjectService(body)
    return res.status(200).json(createSubjectRes);
  } catch (error) {
    console.log(error)
    return res.status(500).json('Error server');
  }
}

exports.getSubjectController = async (req, res) => {
  try {
    const getSubjectsRes = await getSubjectService()
    return res.status(200).json(getSubjectsRes);
  } catch (error) {
    console.log(error)
    return res.status(500).json('Error server');
  }
}

exports.getSubjectByIdController = (req, res) => {
  try {
    const {params} = req;
    const { id } = params;
    const getSubjectsRes = getSubjectByIdService(id)
    return res.status(200).json(getSubjectsRes);
  } catch (error) {
    console.log(error)
    return res.status(500).json('Error server');
  }
}
