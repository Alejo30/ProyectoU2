import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAudiosComponent } from './listar-audios.component';

describe('ListarAudiosComponent', () => {
  let component: ListarAudiosComponent;
  let fixture: ComponentFixture<ListarAudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
