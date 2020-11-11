import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : String;
  
  onKeyPress(evt: any) {
 
    if( evt.keyCode !=32) {
        if (evt.keyCode != 13){
             this.contents += evt.key;
        }
        else {
          this.contents += '<br/>';
        }
    } 
    else {
      this.contents += " ";
      return false;
    }
  }

  onKeyDown(evt :any) {
    if (evt.keyCode == 8){
      if (this.contents.length != 0)
        this.contents = this.contents.slice(0,-1);
    }
  }



  constructor() { }

  ngOnInit(): void {
    this.contents = "";
  }

}
