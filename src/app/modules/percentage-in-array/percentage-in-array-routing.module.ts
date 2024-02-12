import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PercentagePresentationComponent} from './components/percentage-presentation/percentage-presentation.component';

const routes: Routes = [
    {
        path: '',
        component: PercentagePresentationComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PercentageInArrayRoutingModule { }
