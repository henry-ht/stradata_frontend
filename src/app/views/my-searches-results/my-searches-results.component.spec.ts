import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySearchesResultsComponent } from './my-searches-results.component';

describe('MySearchesResultsComponent', () => {
  let component: MySearchesResultsComponent;
  let fixture: ComponentFixture<MySearchesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySearchesResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySearchesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
