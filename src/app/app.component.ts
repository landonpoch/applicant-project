import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'applicant-project';
  items = [];

  ngOnInit() {
    this.showUploads();
  }

  showUploads() {
    this.http.get('http://localhost:3000/')
      .subscribe(this.mapUpload);
  }

  mapUpload = (data: string[]) => {
    return this.items = data.map(item => {
      const filename = item.split('-')[1];
      const isImg = filename.split('.')[1].toUpperCase() === 'jpg'.toUpperCase();
      const isMp4 = filename.split('.')[1].toUpperCase() === 'mp4'.toUpperCase();
      return {
        fullname: item,
        date: new Date(Number(item.split('-')[0])),
        url: `http://localhost:3000/file/${item}`,
        filename,
        isImg,
        isMp4
      };
    });
  }
    
}
