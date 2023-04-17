import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
  });

  const testSetup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    return { app, fixture };
  };

  it('should create the app', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  });
});
