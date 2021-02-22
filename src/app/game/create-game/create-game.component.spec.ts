import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from './create-game.component';
import {By} from '@angular/platform-browser';
import {UpperFirstPipe} from '../pipes/upper-first.pipe';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameComponent, UpperFirstPipe ]
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

  it('should show an error when the name is empty during typing', () => {
    component.form.controls.name.setValue(null);
    component.form.controls.name.markAsDirty();
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('small.error'));

    expect(newListItemElements.length).toEqual(1);
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

  it('should show an error message when the name is already added', () => {
    const name = 'Jane';
    const formElement = fixture.debugElement.query(By.css('form'));

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    component.form.controls.name.setValue(name);
    formElement.triggerEventHandler('ngSubmit', {});
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('small.error'));

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
    const eventEmitterSpy = spyOn(component.create, 'emit');

    playButton.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(eventEmitterSpy).not.toHaveBeenCalled();

  });

  it('should show an error when clicked on the play button', () => {
    const playButton = fixture.debugElement.query(By.css('button'));
    playButton.triggerEventHandler('click', {});
    fixture.detectChanges();

    const newListItemElements = fixture.debugElement.queryAll(By.css('small.error'));
    expect(newListItemElements.length).toEqual(1);
  });
});
