export interface About {
  title: string;
  subtitle: string;
  description: string;
}

export class AboutCard implements About {
  constructor(
    public title: string,
    public subtitle: string,
    public description: string
  ) { }
}
