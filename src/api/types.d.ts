export interface CollectionArgs {
  queryParams?: Record<string, string>;
  options?: RequestInit;
  resource?: string;
}

export interface SpecificIdArgs {
  options?: RequestInit;
  resource?: string;
}
