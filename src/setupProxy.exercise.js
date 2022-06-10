const proxy = app => {
  console.log('proxying')
  app.get(/\/$/, (req, res) => {
    res.redirect(301, '/discover')
  })
}

module.exports = proxy
