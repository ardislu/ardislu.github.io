import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ProjectCard } from '../../models/project.model';
import { ProjectCardService } from '../../services/strapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projectCards!: ProjectCard[];
  public placeholderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Layout defaults
  public containerStyle = {
    'width': 'calc(100% - 20px)',
    'padding-top': '20px'
  }
  // Known Angular bug: the '!important' CSS property will not be applied when using [ngStyle] or [style.xxx]
  // https://github.com/angular/angular/issues/12009
  // Workaround: use a class containing this single style. Remember to update the SCSS classes whenenver the gutters are updated.
  public containerMarginClass = 'container-margin-md';
  public layoutGap = '20px grid';
  public columnPercent = '33.333%';

  // Layout lookup tables
  // Remember to update the SCSS classes whenever the gutters are updated.
  private gutters: { [key: string]: string } = {
    'xs': '10px',
    'sm': '15px',
    'md': '20px',
    'lg': '24px',
    'xl': '24px'
  }
  private columns: { [key: string]: number } = {
    'xs': 1,
    'sm': 2,
    'md': 3,
    'lg': 4,
    'xl': 5
  }

  constructor(private project: ProjectCardService, private media: MediaObserver) {
    this.project.list().subscribe((res: ProjectCard[]) => this.projectCards = res);

    this.media.asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      ).subscribe((change: MediaChange) => this.configLayout(change.mqAlias));
  }

  ngOnInit(): void {
  }

  configLayout(breakpoint: string): void {
    const gap = this.gutters[breakpoint];

    this.containerStyle = {
      'width': `calc(100% - ${gap})`,
      'padding-top': gap
    }
    this.containerMarginClass = `container-margin-${breakpoint}`; // MUST be a class. Can't merge with containerStyle.
    this.layoutGap = `${gap} grid`;
    this.columnPercent = `${(1 / this.columns[breakpoint] * 100).toFixed(3)}%`;
  }

}
