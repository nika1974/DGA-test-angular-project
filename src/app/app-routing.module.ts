import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-description',
    pathMatch: 'full'
  },
  {
    path: 'job-description',
    loadChildren: () => import('./modules/job-description/job-description.module').then(m => m.JobDescriptionModule),
  },
  {
    path: 'imdb',
    loadChildren: () => import('./modules/imdb/imdb.module').then(m => m.ImdbModule),
  },
  {
    path: 'for-custom-pipe',
    loadChildren: () => import('./modules/for-custom-pipe/for-custom-pipe.module').then(m => m.ForCustomPipeModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: 'percentage',
    loadChildren: () => import('./modules/percentage-in-array/percentage-in-array.module').then(m => m.PercentageInArrayModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
