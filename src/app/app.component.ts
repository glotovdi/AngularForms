import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  name: Observable<string>;
  nameControlSubscription: Subscription;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.subscribeToName();
    this.name = this.myForm.controls['user'].valueChanges;
  }

  ngOnDestroy() {
    this.nameControlSubscription.unsubscribe();
  }

  submit() {
    if (this.myForm.invalid) {
      this.markAsTouched();
      return;
    }

    console.log(this.myForm);
  }

  public isControlInvalidAndTouched(controlName): boolean {
    return this.myForm.controls[controlName].invalid && this.myForm.controls[controlName].touched;
  }

  private subscribeToName(): void {
    this.myForm.controls['user'].valueChanges.subscribe(value => {
      this.myForm.controls['email'].reset();
    });
  }

  private markAsTouched(): void {
    Object.keys(this.myForm.controls).forEach(i => {
      this.myForm.controls[i].markAsTouched();
    });
  }

  private initForm(): void {
    this.myForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}')]]
    });

    this.myForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}')]]
    });

    this.myForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}')]]
    });
  }
}
