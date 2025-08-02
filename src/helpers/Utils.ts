class Utils {
  static setSelectedId = (id: string): void => sessionStorage.setItem('selectedId', id);

  static getSelectedId = () => sessionStorage.getItem('selectedId') || null;

  static secToHours(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return +hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }

  static reorderArray<T>(array: T[], from: number, to: number): T[] {
    if (from < 0 || to < 0 || from >= array.length || to >= array.length) return array;

    const newArray: T[] = [...array];

    const item = newArray.splice(from, 1)[0];

    newArray.splice(to, 0, item);

    return newArray;
  }
}

export default Utils;
