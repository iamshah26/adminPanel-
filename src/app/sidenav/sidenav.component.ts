import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { togglePanel } from '../../Store/admin.actions';
import { selectIsPanelOpen } from '../../Store/admin.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isPanelOpen$: Observable<boolean>;

  constructor(private store: Store) {
    this.isPanelOpen$ = this.store.select(selectIsPanelOpen);
  }

  togglePanel(): void {
    this.store.dispatch(togglePanel());
  }
}