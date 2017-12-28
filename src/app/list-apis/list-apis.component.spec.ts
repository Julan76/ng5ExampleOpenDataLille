import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApisComponent } from './list-apis.component';

describe('ListApisComponent', () => {
  let component: ListApisComponent;
  let fixture: ComponentFixture<ListApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
