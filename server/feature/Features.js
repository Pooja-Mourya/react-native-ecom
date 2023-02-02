class Features {
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
    console.log('query', query);
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr,
            $option: 'i',
          },
        }
      : {};
    console.log('keyword', keyword);
    this.query = this.query.find({...keyword});
    console.log('this', this);
    return this;
  }

  filter() {
    const queryCopy = {...this.queryStr};
    const removeFields = ['keyword', 'page', 'limit'];
    removeFields.forEach(key => delete queryCopy[key]);
    this.query = this.query.find(queryCopy);
    return this;
  }

  paginationPerPage(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
  }
}

module.exports = Features;
