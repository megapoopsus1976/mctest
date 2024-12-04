import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsviewComponent } from './fsview.component';

describe('FsviewComponent', () => {
  let component: FsviewComponent;
  let fixture: ComponentFixture<FsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
