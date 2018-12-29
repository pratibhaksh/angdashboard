import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';



@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent {
test = 'pratibha';
test1 = 'text-success';
test2 = false;
messagemultiple={
  'text-danger' : !this.test2,
  'text-success':this.test2,
  'text-special':this.test2
}
ngstyle={
  'color':'red',
  'fontSize':'53',
  'fontStyle':'italic',
  'backgroundColor':'black'
}
 admin = new FormGroup({
  fname:new FormControl('',Validators.required),
  rn:new FormControl('',Validators.required),
  class1:new FormControl('',Validators.required),
  gender:new FormControl('',Validators.required),
  pname:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  mobile:new FormControl('',Validators.required),
  pic:new FormControl('',Validators.required),
  address:new FormControl('',Validators.required)


 })

  constructor() { }

  get fname()
  {
    return this.admin.get('fname');
   
  }
  get rn()
  {
    return this.admin.get('rn');
   
  }
  get class1()
  {
    return this.admin.get('class1');
   
  }
  get gender()
  {
    return this.admin.get('gender');
   
  }
  get pname()
  {
    return this.admin.get('pname');
   
  }
  get email()
  {
    return this.admin.get('email');
   
  }
  get mobile()
  {
    return this.admin.get('mobile');
   
  }
  get pic()
  {
    return this.admin.get('pic');
   
  }
  get address()
  {
    return this.admin.get('address');
   
  }
  onRegisterClick()
  {

    if (localStorage.users == null || localStorage.users == undefined)
        {
          localStorage.users = JSON.stringify( [] );
        }
   
    var u = JSON.parse(localStorage.users);
    u.push({'PersonName':this.admin.controls.fname.value,
     'roll number': this.admin.controls.rn.value,
     'Class':this.admin.controls.class1.value,
     'gender':this.admin.controls.gender.value,
     'Parent Name':this.admin.controls.pname.value,
     'Email':this.admin.controls.email.value,
     'Mobile':this.admin.controls.mobile.value,
      'Pic':this.admin.controls.pic.value,
      'address':this.admin.controls.address.value,

     });
      localStorage.users = JSON.stringify(u);
   
     
  }
  greetint1='eretwetw';
  greetint($event)
  {
    console.log(this.greetint1)
    this.greetint1 = event.type
  }
}
