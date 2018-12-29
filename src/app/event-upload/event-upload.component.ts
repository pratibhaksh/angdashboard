import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-upload',
  templateUrl: './event-upload.component.html',
  styleUrls: ['./event-upload.component.css']
})
export class EventUploadComponent implements OnInit {

  eventupload = new FormGroup({
    title:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    photo:new FormControl('',Validators.required)
  })

  get title()
  {
    return this.eventupload.get('title');
  }
  
  get description()
  {
    return this.eventupload.get('description');
  }
  
  get photo()
  {
    return this.eventupload.get('photo');
  }
  constructor() { }

  ngOnInit() {
  }

}
