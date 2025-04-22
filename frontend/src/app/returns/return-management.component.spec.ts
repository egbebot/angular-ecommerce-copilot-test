import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnManagementComponent } from './return-management.component';

describe('ReturnManagementComponent', () => {
  let component: ReturnManagementComponent;
  let fixture: ComponentFixture<ReturnManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
