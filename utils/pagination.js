const pagination = async (page = 0,limit = 10) => {
    page =page>0?((page - 1)*limit):0
    limit = page>0?(page * limit):limit
    return {page, limit}
  }

  export default {
    pagination
  }