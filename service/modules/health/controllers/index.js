const get = (ctx) => {
  //ctx.logger.debug('get health')
  ctx.body = {
    message: "ok"
  }
}

module.exports = {
  get
}
