import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbookComponent } from './modalbook.component';

describe('ModalbookComponent', () => {
  let component: ModalbookComponent;
  let fixture: ComponentFixture<ModalbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalbookComponent]
    });
    fixture = TestBed.createComponent(ModalbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
