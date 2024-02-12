import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DateValidatorInterface} from 'src/app/shared/interfaces/validators.interfaces';
import {DateMaximum} from 'src/app/shared/validators/maxDate.validator';
import {DateMinimum} from 'src/app/shared/validators/minDate.validator';

interface FromAndToValidator {
  [x: string]: DateValidatorInterface
}

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDescriptionComponent implements OnInit {
  jobsForm!: FormGroup;
  fromAndToValidators: FromAndToValidator = {
    from: {
      date: '',
      errorName: 'minDate',
      message: 'To date cannot be less than From date'
    },
    to: {
      date: '',
      errorName: 'maxDate',
      message: 'From date cannot be higher than To date'
    },
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initJobsArray();
  }

  get jobs(): FormArray {
    return this.jobsForm.get('jobs') as FormArray;
  }

  initJobsArray(): void {
    this.jobsForm = this.formBuilder.group({
      jobs: this.formBuilder.array([
        this.newJobForm()
      ])
    });
  }

  handleJobAddition(): void {
    this.jobs.push(this.newJobForm());
  }

  handlePositionAddition(index: number): void {
    this.getPositionsFormArray(index).push(this.newPositionForm());
  }

  newPositionForm(): FormGroup {
    return this.formBuilder.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionStartDate: [''],
      positionEndDate: [''],
    })
  }

  newJobForm(): FormGroup {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      companyWebsite: ['', Validators.required],
      companyDescription: ['', Validators.required],
      position: this.formBuilder.array([
        this.newPositionForm()
      ])
    });
  }

  handleJobRemove(controls: FormArray, index: number): void {
    controls.removeAt(index);
  }

  getPositionsFormArray(index: number): FormArray {
    return this.jobs.controls[index].get('position') as FormArray;
  }

  handleDateChange(type: 'from' | 'to', date: Date, jobIndex: number, positionIndex: number): void {
    const startDate = this.getPositionsFormArray(jobIndex).controls[positionIndex].get('positionStartDate');
    const endDate = this.getPositionsFormArray(jobIndex).controls[positionIndex].get('positionEndDate');

    if (type === 'from' && !endDate?.hasError('maxDate')) {
      endDate?.setValidators(DateMinimum({
        ...this.fromAndToValidators['from'],
        date
      }));
    } else if (type === 'to' && !endDate?.hasError('minDate')) {
      startDate?.setValidators(DateMaximum({
        ...this.fromAndToValidators['to'],
        date
      }));
    }

    startDate?.updateValueAndValidity();
    endDate?.updateValueAndValidity();
  }

  getDateErrors(jobIndex: number, positionIndex: number, dateType: string, error: string): string {
    return this.getPositionsFormArray(jobIndex)?.controls?.[positionIndex]?.get(dateType)?.errors?.[error]?.value
  }
}
