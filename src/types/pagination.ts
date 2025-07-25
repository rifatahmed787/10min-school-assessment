export interface IPagination {
    sort?: "asc" | "desc";
    size: number;
    page: number;
    meta: {
      page: number | null;
      size: number | null;
      total: number | null;
      totalPage: number | null;
    };
  }