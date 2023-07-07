import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddviveiroPage } from './addviveiro.page';

describe('AddviveiroPage', () => {
  let component: AddviveiroPage;
  let fixture: ComponentFixture<AddviveiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddviveiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
