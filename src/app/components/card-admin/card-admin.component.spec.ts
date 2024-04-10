import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminComponent } from './card-admin.component';

describe('CardAdminComponent', () => {
  let component: CardAdminComponent;
  let fixture: ComponentFixture<CardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAdminComponent]
    });
    fixture = TestBed.createComponent(CardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
