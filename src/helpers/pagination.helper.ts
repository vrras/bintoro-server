
export const createPaginationOptions = (req) => {
  let page = req.query.page;
  let limit = req.query.limit;
  const pagination = new PaginationOptions();

  if (!page || page <= 0) { page = 1; }
  if (!limit) { limit = 20; }

  pagination.page = page;
  pagination.limit = limit;
  pagination.queryPage = (page - 1) * limit;

  return pagination;
};

export class PaginationOptions {
  page: number;
  limit: number;
  queryPage: number;
  data: any;
}

export class Pagination {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  data: any;

  constructor(results: any, total: number, pagination: PaginationOptions) {
    this.page = Number(pagination.page);
    this.limit = Number(pagination.limit);
    this.total = total;
    this.totalPage = Math.ceil(total / pagination.limit);
    this.data = results;
  }
}
