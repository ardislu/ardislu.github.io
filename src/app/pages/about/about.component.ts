import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AboutCard } from '../../models/about.model';
import { AboutCardService } from '../../services/strapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutCard!: AboutCard;

  constructor(private location: Location, private about: AboutCardService) {
    this.about.list().subscribe((res: AboutCard) => this.aboutCard = res);
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
