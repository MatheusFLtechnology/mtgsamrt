import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListClientePage } from './list-cliente.page';

describe('ListClientePage', () => {
  let component: ListClientePage;
  let fixture: ComponentFixture<ListClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
