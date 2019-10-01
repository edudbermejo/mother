module.exports = function(req, res) {
  easyAnswers.some((element) => {
    if(element.regex.test(req.body.text)) {
      res.send({
        text: element.answer
      })
      return true
    } else {
      return false
    }
  })
}

const easyAnswers = [
  {
    regex: /(hello)|(hi)/i,
    answer: 'Hello, how can I help you?'
  },
  {
    regex: /.*/,
    answer: 'Hello, Ripley'
  }
]