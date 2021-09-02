import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaDetailsComponent } from './agencia-details.component';

describe('AgenciaDetailsComponent', () => {
  let component: AgenciaDetailsComponent;
  let fixture: ComponentFixture<AgenciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
