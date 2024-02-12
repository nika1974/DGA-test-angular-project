import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForCustomPipeComponent} from './components/for-custom-pipe/for-custom-pipe.component';

const routes: Routes = [
    {
        path: '',
        component: ForCustomPipeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForCustomPipeRoutingModule { }
