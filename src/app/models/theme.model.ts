interface Theme {
  displayName: string;
  cssName: string;
  colorClass: string;
}

export class BaseTheme implements Theme {
  constructor(
    public displayName: string,
    public cssName: string,
    public colorClass: string
  ) { }
}
