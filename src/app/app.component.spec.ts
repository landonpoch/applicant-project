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

  it('should create and init the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
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
    const LocalUrlRoot = 'http://localhost:3000/file/';
    const filename1 = '1611728162369-img1.jpg';
    const filename2 = '1611728162370-img2.jpg';
    const resp = app.mapUpload([filename1, filename2]);
    const [item1, item2] = resp;
    expect(item1.isImg).toBeTrue();
    expect(item1.isMp4).toBeFalse();
    expect(item1.filename).toEqual('img1.jpg');
    expect(item1.url).toEqual(`${LocalUrlRoot}${filename1}`);
    expect(item1.fullname).toEqual(filename1);
    expect(item2.isImg).toBeTrue();
    expect(item2.isMp4).toBeFalse();
    expect(item2.filename).toEqual('img2.jpg');
    expect(item2.url).toEqual(`${LocalUrlRoot}${filename2}`);
    expect(item2.fullname).toEqual(filename2);
  });
});
