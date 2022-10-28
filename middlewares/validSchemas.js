exports.validPostSubjectSchema = (req, res, next) => {
  try {
    const { body } = req
    const { subject } = body
    if (typeof subject === 'string' && subject.length > 2) {
      next()
      return
    }
    res
      .status(404)
      .send('Bad request')
  } catch (error) {
    res
      .status(404)
      .send('Bad request')
  }
}