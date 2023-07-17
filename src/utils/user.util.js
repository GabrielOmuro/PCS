const { Category } = require('../models/category')

class UserUtil {
  async listUsers(offset, limit) {
    const list = await Category.findAll({
      limit,
      offset
    })

    return list
  }
}

module.exports = new UserUtil()