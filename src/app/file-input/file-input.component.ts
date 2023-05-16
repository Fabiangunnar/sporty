import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
  @Output() filesSelected: EventEmitter<FileList> =
    new EventEmitter<FileList>();
  name: string | null = null;

  handleFileInputChange(event: any): void {
    const files: FileList = event.target.files;
    console.log(files[0]);
    this.name = files[0].name;
    this.filesSelected.emit(files);
  }
}
