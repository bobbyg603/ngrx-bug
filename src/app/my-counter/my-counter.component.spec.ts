import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { MyCounterComponent } from './my-counter.component';
import { provideMockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  const count = 1;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyCounterComponent,
        CommonModule
      ],
      providers: [
        provideMockStore({ initialState: { count } }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Why does this fail?
  describe('count$', () => {
    it('should emit initialCount', async () => {
      const result = await firstValueFrom(component.count$);
      expect(result).toEqual(count);
    });
  });
});
