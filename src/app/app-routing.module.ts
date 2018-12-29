import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ShoolGalleryComponent } from './shool-gallery/shool-gallery.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UploadNoticeComponent } from './upload-notice/upload-notice.component';
import { UploadStudentMarksComponent } from './upload-student-marks/upload-student-marks.component';
import { EventUploadComponent } from './event-upload/event-upload.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'parentdashboard',component:ParentDashboardComponent},
  {path:'noticeboard',component:NoticeBoardComponent},
  {path:'schoolgallery',component:ShoolGalleryComponent},
  {path:'adminstd',component:AdminStudentComponent},
  {path:'stdlist',component:StudentListComponent},
  {path:'uploadstdmarks',component:UploadStudentMarksComponent},
  {path:'noticeupload',component:UploadNoticeComponent},
  {path:'eventupload',component:EventUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
