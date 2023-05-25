import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { JobComponent } from './job/job.component';
import { SummaryComponent } from './summary/summary.component';
import { CalanderComponent } from './calander/calander.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    // children: [
    //   {
    //     path: 'summary', // child route path
    //     component: , // child route component that the router renders
    //   },
    //   {
    //     path: 'calander',
    //     component: CalanderComponent, // another child route component that the router renders
    //   },
    // ],
  },
  { path: 'dashboard/summary', component: SummaryComponent },
  { path: 'dashboard/calander', component: CalanderComponent },
  { path: 'hire/engage', component: JobComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
