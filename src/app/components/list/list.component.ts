import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AddEntryFormComponent } from '../add-entry-form/add-entry-form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    AddEntryFormComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() addNew = true;

  items = ['foo', 'bar', 'baz'];

  onAddEntry(entry: string) {
    this.items.push(entry);
  }
}
