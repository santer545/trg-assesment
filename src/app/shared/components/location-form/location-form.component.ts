import {
  ChangeDetectionStrategy,
  EventEmitter,
  inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { LocationData } from '@app/models/location.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

interface LocationForm {
  name: FormControl<string>;
  lng: FormControl<number>;
  ltd: FormControl<number>;
}

@Component({
  selector: 'trg-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationFormComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  @Input() location!: LocationData;
  @Output() updatedLocation = new EventEmitter<LocationData>();
  @Output() isDirtyForm = new EventEmitter<boolean>(false);

  destroy$: Subject<boolean> = new Subject<boolean>();

  form!: FormGroup<LocationForm>;

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control<string>(
        this.location.name || '',
        Validators.compose([Validators.required, Validators.maxLength(20)])
      ),
      lng: this.fb.control<number>(
        this.location.lng || 0,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\d*\.?\d*$/),
          Validators.max(180),
          Validators.min(-180),
        ])
      ),
      ltd: this.fb.control<number>(
        this.location.ltd || 0,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\d*\.?\d*$/),
          Validators.max(180),
          Validators.min(-180),
        ])
      ),
    });

    this.isDirtyForm.emit(this.form.invalid);

    this.form.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(({ name, lng, ltd }) => {
        if (name && lng && ltd) {
          this.updatedLocation.emit({
            id: this.location.id,
            name,
            lng,
            ltd,
          });
        }
      });

    this.form.statusChanges.subscribe((status) => {
      this.isDirtyForm.emit(status === 'INVALID');
    });
  }

  get locationFormControl() {
    return this.form.controls;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
