import type { Collection } from "../type";

export const sort = <T extends Collection[]>(collection: T): T => {
  return collection.sort((a, b) => a.order - b.order);
};
