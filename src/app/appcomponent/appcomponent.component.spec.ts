import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcomponentComponent } from './appcomponent.component';

describe('AppcomponentComponent', () => {
  let component: AppcomponentComponent;
  let fixture: ComponentFixture<AppcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
