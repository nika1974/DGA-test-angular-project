import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobDescriptionComponent} from './components/job-description/job-description.component';

const routes: Routes = [
    {
        path: '',
        component: JobDescriptionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobDescriptionRoutingModule { }
