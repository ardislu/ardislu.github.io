/* Generic interface for API adapters. Implementation required for each data model. */
export interface Adapter<T> {
  adapt(item: any): T;
}
