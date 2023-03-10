import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySearchesComponent } from './my-searches.component';

describe('MySearchesComponent', () => {
  let component: MySearchesComponent;
  let fixture: ComponentFixture<MySearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySearchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
