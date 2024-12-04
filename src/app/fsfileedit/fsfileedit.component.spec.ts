import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsfileeditComponent } from './fsfileedit.component';

describe('FsfileeditComponent', () => {
  let component: FsfileeditComponent;
  let fixture: ComponentFixture<FsfileeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsfileeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsfileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
