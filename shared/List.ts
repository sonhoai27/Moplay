interface IArrayList<T> {
  getList(): T[];
  add(item: T): void;
  size(): number;
  isEmpty(): boolean;
  contains(item: T): boolean;
  indexOf(item: T): number;
  lastIndexOf(item: T): number;
  set(index: number, data: T): void;
  get(index: number): T;
  remove(index: number): T;
  map(callbackfn: (value: T, index: number) => any, thisArg?: any): any;
}

export class ArrayList<T> implements IArrayList<T> {
  private list: T[];
  constructor(list: T[] = []) {
    this.list = list;
  }
  getList(): T[] {
    return this.list;
  }
  add(item: T): void {
    this.list = [...this.list, item];
  }
  size(): number {
    return this.list.length;
  }
  isEmpty(): boolean {
    if (this.size() === 0) {
      return false;
    }
    return true;
  }
  contains(item: T): boolean {
    throw new Error("Method not implemented.");
  }
  indexOf(item: T): number {
    throw new Error("Method not implemented.");
  }
  lastIndexOf(item: T): number {
    throw new Error("Method not implemented.");
  }
  remove(index: number): T {
    throw new Error("Method not implemented.");
  }
  set(index: any, data?: any): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): T {
    throw new Error("Method not implemented.");
  }
  map(callbackfn: (value: T, index: number) => any, thisArg?: any): any {
    return this.list.map((element, index) => {
      return callbackfn(element, index);
    });
  }
}
