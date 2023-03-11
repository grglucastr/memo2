import { Thought } from './../thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thought: Thought = {
    author: "",
    content: "",
    template: ""
  }

  createThought() {
  }

  cancel(){

  }



}
