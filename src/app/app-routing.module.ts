import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { SummaryComponent } from './summary/summary.component';
import { CalanderComponent } from './calander/calander.component';
import { InterviewComponent } from './interview/interview.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { TaskComponent } from './task/task.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { TalentComponent } from './talent/talent.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConsoleComponent } from './console/console.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { AdminGuard } from 'src/guards/admin.guard';


const routes: Routes = [
  { path: '', 
  component: DashboardComponent, 
  
 },
 
  { path: 'dashboard/summary', component: SummaryComponent},
  { path: 'dashboard/calander', component: CalanderComponent,
  canActivateChild:[AdminGuard] 
},
  { path: 'dashboard/interview', component: InterviewComponent },
  { path: 'dashboard/assessment', component: AssessmentsComponent },
  { path: 'dashboard/task', component: TaskComponent },
  { path: 'dashboard/activities', component: ActivitiesComponent },

  

  { path: 'jobs',
   component: JobComponent,
   canActivate:[AuthGuard],
  },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'talent', component: TalentComponent },
  { path: 'assessment', component: AssessmentsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'console', component: ConsoleComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
