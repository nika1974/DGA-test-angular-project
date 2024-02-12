import {Component, OnInit} from '@angular/core';
import {LoaderService} from './shared/services/loader.service';
import {delay} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'job-description';
  loading: boolean;

  constructor(
    public loaderSrvc: LoaderService
  ) { }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loaderSrvc.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
