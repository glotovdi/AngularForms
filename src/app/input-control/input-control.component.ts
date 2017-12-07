import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;


  constructor() {}

  ngOnInit() {}
}
