import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'applicant-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('applicant-project');
  });

  it('should map upload details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mapped = app.mapUpload('1597654756778-file.jpg');
    expect(mapped.isImg).toBeTrue();
    expect(mapped.isMp4).toBeFalse();
    expect(mapped.filename).toEqual('file.jpg');
    expect(mapped.url).toEqual('http://localhost:3000/file/1597654756778-file.jpg');
    expect(mapped.fullname).toEqual('1597654756778-file.jpg');
  })
});
