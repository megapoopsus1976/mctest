import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FselemnameComponent } from './fselemname.component';

describe('FselemnameComponent', () => {
  let component: FselemnameComponent;
  let fixture: ComponentFixture<FselemnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FselemnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FselemnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
