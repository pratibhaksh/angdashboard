import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ShoolGalleryComponent } from './shool-gallery/shool-gallery.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UploadStudentMarksComponent } from './upload-student-marks/upload-student-marks.component';
import { UploadNoticeComponent } from './upload-notice/upload-notice.component';
import { EventUploadComponent } from './event-upload/event-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ParentDashboardComponent,
    DashboardComponent,
    FooterComponent,
    NoticeBoardComponent,
    ShoolGalleryComponent,
    AdminStudentComponent,
    StudentListComponent,
    UploadStudentMarksComponent,
    UploadNoticeComponent,
    EventUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
