import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ProjectService } from 'src/app/Service/project.service';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let projectMock: ReturnType<jest.Mock>;

  beforeEach(() => {
    projectMock = {
      projects: jest.fn()
    }
    TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      providers: [
        {
          provide: ProjectService, useValue: projectMock
        }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ProjectComponent);
      component = fixture.componentInstance;
    })
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProjectComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all check method', () => {
    // expect(component.check('3')).toBe('get data');s
    // expect(projectMock.projects).toHaveBeenCalledTimes(1);
    expect(component.check('')).toBeTruthy();
  })


});