interface Project {
  title: string;
  tags: string[];
  description: string;
  route: string;
}

export class ProjectCard implements Project {
  constructor(
    public title: string,
    public tags: string[],
    public description: string,
    public route: string
  ) { }
}
