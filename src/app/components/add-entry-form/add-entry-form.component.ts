import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-entry-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './add-entry-form.component.html',
  styleUrl: './add-entry-form.component.scss',
})
export class AddEntryFormComponent {
  newEntry = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  @Output() addEntry = new EventEmitter<string>();

  submit() {
    if (!this.newEntry.valid) return;
    this.addEntry.emit(this.newEntry.value as string);
    this.reset();
  }

  private reset() {
    this.newEntry.reset();
    this.newEntry.setErrors(null);
  }
}
