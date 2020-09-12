import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Adapter } from '../models/adapter.model';
import { ProjectCard } from '../models/project.model';
import { AboutCard } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardAdapter implements Adapter<ProjectCard> {
  adapt(item: any): ProjectCard {
    return new ProjectCard(
      item.title,
      item.tags.replace(/ /g, '').split(','),
      item.description,
      item.route
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {

  constructor(private http: HttpClient, private adapter: ProjectCardAdapter) { }

  list(): Observable<ProjectCard[]> {
    const url = `${environment.strapiHost}/project-cards`;
    return this.http.get(url).pipe(
      // List of items reponse: [{item}]
      map((itemList: any) => itemList.map((item: any) => this.adapter.adapt(item)))
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class AboutCardAdapter implements Adapter<AboutCard> {
  adapt(item: any): AboutCard {
    return new AboutCard(
      item.title,
      item.subtitle,
      item.description
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient, private adapter: AboutCardAdapter) { }

  list(): Observable<AboutCard> {
    const url = `${environment.strapiHost}/about`;
    return this.http.get(url).pipe(
      // Singleton response: {item}
      map((item: any) => this.adapter.adapt(item))
    );
  }
}
