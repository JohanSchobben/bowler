import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from './create-game.component';
import {By} from '@angular/platform-browser';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the new item to list when added', () => {
    const name = 'Jane';
    const formElement = fixture.debugElement.query(By.css('form'));

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('li'));

    expect(newListItemElements.length).toEqual(1);
    expect(newListItemElements[0].nativeElement.innerText).toEqual(name);
  });

  it('should not add anything when the name is empty', () => {
    const name = null;
    const formElement = fixture.debugElement.query(By.css('form'));

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('li'));

    expect(newListItemElements.length).toEqual(0);
  });

  it('should not add anything when the name already is added', () => {
    const name = 'Jane';
    const formElement = fixture.debugElement.query(By.css('form'));

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('li'));

    expect(newListItemElements.length).toEqual(1);
  });

  it('should emit a create event when clicked on the play button', () => {
    const playButton = fixture.debugElement.query(By.css('button'));
    const eventEmitterspy = spyOn(component.create, 'emit');
    component.playerNames = ['John'];

    playButton.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(eventEmitterspy).toHaveBeenCalledWith([{name: 'John', turns: []}]);

  });

  it('should not emit a create event when clicked on the play button but the list is empty', () => {
    const playButton = fixture.debugElement.query(By.css('button'));
    const eventEmitterspy = spyOn(component.create, 'emit');

    playButton.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(eventEmitterspy).not.toHaveBeenCalled();

  });
});
