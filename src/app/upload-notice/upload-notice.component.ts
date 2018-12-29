import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-notice',
  templateUrl: './upload-notice.component.html',
  styleUrls: ['./upload-notice.component.css']
})
export class UploadNoticeComponent implements OnInit {

      uploadNotice= new FormGroup({
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      class:new FormControl('',Validators.required)

  })

 get title()
 {
   return this.uploadNotice.get('title');
 }
 get description()
 {
   return this.uploadNotice.get('description');
 }
 get class()
 {
   return this.uploadNotice.get('class');
 }
  constructor() { }

  ngOnInit() {
  }

}
