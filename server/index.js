const express = require('express')
const app = express()

const CODE_SUCCESS = 200
const CODE_ERROR = 500

app.get('/list', function (req, res) {
  const { limit } = req.query
  if (0 <= limit && limit <= 50) {
    const data = []
    for (let index = 0; index < limit; index++) {
      data.push({
        key: index,
        name: `name_${index}`,
        age: 10 + index,
        sex: index % 2
      })
    }
    res.status(CODE_SUCCESS).send(data)
  } else {
    res.status(CODE_ERROR).send('限制条数超出范围！')
  }
})

app.listen(3000, console.log('==> server listen:3000'))
