import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FspathviewComponent } from './fspathview.component';

describe('FspathviewComponent', () => {
  let component: FspathviewComponent;
  let fixture: ComponentFixture<FspathviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FspathviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FspathviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
