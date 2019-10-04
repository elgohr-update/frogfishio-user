let logger;

export default class UserVerifyHandler {
  private api;

  constructor(private engine, private user) {
    logger = engine.log.log('@user-verify');
    this.api = this.engine.user;
  }

  async put(req, res, params, callback) {
    try {
      return res.json(await this.api.verify(req.body.code));
    } catch (err) {
      err.send(res);
    }
  }
}