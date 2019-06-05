import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { rootReducer } from './../redux/app.reducer';
import * as TodoActions from './../redux/todo/todo.actions';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TodoComponent, FooterComponent, TodoListComponent, NewTodoComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([{ path: '', component: TodoListComponent }]),
        StoreModule.forRoot(rootReducer),
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    spyOn(localStorage, 'getItem').and.returnValue('[]');

    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Test for populateTodos', () => {
    it('should dispatch an action with item in localStorage', () => {
      const store = TestBed.get(Store);
      spyOn(store, 'dispatch').and.callThrough();

      spyOn(localStorage, 'getItem').and.returnValue('[]');

      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();

      const action = new TodoActions.PopulateTodosAction([]);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action with null in localStorage', () => {
      const store = TestBed.get(Store);
      spyOn(store, 'dispatch').and.callThrough();

      spyOn(localStorage, 'getItem').and.returnValue(null);
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();

      const action = new TodoActions.PopulateTodosAction([]);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('Test for updateTodos', () => {
    it('should called localStorage.setItem', () => {
      const store = TestBed.get(Store);
      spyOn(store, 'dispatch').and.callThrough();

      spyOn(localStorage, 'getItem').and.returnValue('[]');
      spyOn(localStorage, 'setItem').and.callThrough();

      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();

      expect(localStorage.setItem).toHaveBeenCalledWith('todo-app-ngrx', '[]');
    });
  });
});
