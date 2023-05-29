import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CandidatesComponent } from './candidates/candidates.component';
import { TalentComponent } from './talent/talent.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConsoleComponent } from './console/console.component';
import { JobComponent } from './job/job.component';
import { SummaryComponent } from './summary/summary.component';
import { InterviewComponent } from './interview/interview.component';
import { TaskComponent } from './task/task.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CalanderComponent } from './calander/calander.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from 'src/guards/auth.guard';
import { AdminGuard } from 'src/guards/admin.guard';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { adminReducer } from 'src/Store/admin.reducers';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    CandidatesComponent,
    TalentComponent,
    AssessmentsComponent,
    AnalyticsComponent,
    ConsoleComponent,
    JobComponent,
    SummaryComponent,
    CalanderComponent,
    InterviewComponent,
    TaskComponent,
    ActivitiesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,

    StoreModule.forRoot({ admin: adminReducer }),
    StoreDevtoolsModule.instrument(),



  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
