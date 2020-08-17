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
      .subscribe((data: string[]) => this.items = data.map(this.mapUpload));
  }

  mapUpload(upload) {
    const filename = upload.split('-')[1];
    const isImg = filename.split('.')[1].toUpperCase() === 'jpg'.toUpperCase();
    const isMp4 = filename.split('.')[1].toUpperCase() === 'mp4'.toUpperCase();
    return {
      fullname: upload,
      date: new Date(Number(upload.split('-')[0])),
      url: `http://localhost:3000/file/${upload}`,
      filename,
      isImg,
      isMp4
    };
  }
}
