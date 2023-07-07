import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViveiroPage } from './viveiro.page';

describe('ViveiroPage', () => {
  let component: ViveiroPage;
  let fixture: ComponentFixture<ViveiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViveiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
