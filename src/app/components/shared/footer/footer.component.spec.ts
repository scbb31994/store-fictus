import { TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";

describe('FooterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(FooterComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the footer component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  })
})