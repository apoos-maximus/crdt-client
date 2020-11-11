import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : String;

  constructor() { }

  ngOnInit(): void {
    this.contents = "edit here !";
  }

}
