export type Repository<T> = {
  findAll: () => Promise<T[]>;
  save: (item: T) => Promise<void>;
  saveAll: (items: T[]) => Promise<void>;
  clear: () => Promise<void>;
};
