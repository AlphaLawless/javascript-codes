const os = require('os')

setInterval(() => {
  const {freemem, totalmem} = os

  const mem = parseInt(freemem() / 1024 / 1024)
  const total = parseInt(totalmem() / 1024 / 1024)
  const percents = parseInt((mem / total) * 100)

  const stats = {
    Free: `${mem} MB`,
    Total: `${total} MB`,
    Usage: `${percents}%`
  }

  console.clear()
  console.log("++++++PC STATUS++++++")
  console.table(stats)
}, 1000)
