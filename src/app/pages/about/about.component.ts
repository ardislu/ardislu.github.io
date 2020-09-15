import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AboutCard } from '../../models/about.model';
import { AboutCardService } from '../../services/strapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutCard$!: Observable<AboutCard>;

  constructor(private location: Location, private about: AboutCardService) {
  }

  ngOnInit(): void {
    this.aboutCard$ = this.about.list();
  }

  goBack() {
    this.location.back();
  }

}
