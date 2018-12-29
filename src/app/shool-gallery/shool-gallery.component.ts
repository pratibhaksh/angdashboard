import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shool-gallery',
  templateUrl: './shool-gallery.component.html',
  styleUrls: ['./shool-gallery.component.css']
})
export class ShoolGalleryComponent implements OnInit {

  schoolgallery = new FormGroup({
  
    imgupload : new FormControl('',Validators.required),
    selectcategories : new FormControl('',Validators.required),
    privacy : new FormControl('',Validators.required)

  })
 
  get imgupload()
  {
    return this.schoolgallery.get('imgupload');
  }
  get selectcategories()
  {
    return this.schoolgallery.get('selectcategories');
  }
  get privacy()
  {
    return this.schoolgallery.get('privacy');
  }
  constructor() { }

  ngOnInit() {
  }

}
