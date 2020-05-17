import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('CounterComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h2').textContent;
    expect(titleText).toEqual('String Comparer');
  }));

  // it('should disable Get Index of Subtext button, if text is empty', async(() => {
  //   const inputTextElement = fixture.nativeElement.querySelector('textInput');
  //   expect(inputTextElement.textContent).toEqual('');

  //   const comparebutton = fixture.nativeElement.querySelector('button');
  //   check if it is disabled
  // }));

  // it('should disable Get Index of Subtext button, if sub text is empty', async(() => {
  //   const subTextElement = fixture.nativeElement.querySelector('subInput');
  //   expect(subTextElement.textContent).toEqual('');

  //   const comparebutton = fixture.nativeElement.querySelector('button');
  //   check if it is disabled
  // }));


  //Error div displayed test
  //success div displayed test


});
