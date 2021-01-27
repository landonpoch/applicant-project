import { AppModule } from './app.module';

describe('AppComponent', () => {
    it('should instantiate module', () => {
        const module = new AppModule();
        expect(module).toBeTruthy();
    });
});
  