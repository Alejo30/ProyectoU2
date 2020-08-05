import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAudiosComponent } from './registrar-audios.component';

describe('RegistrarAudiosComponent', () => {
  let component: RegistrarAudiosComponent;
  let fixture: ComponentFixture<RegistrarAudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
