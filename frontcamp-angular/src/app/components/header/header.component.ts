import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean;

  constructor(private loginService: LoginService) {};

  public ngOnInit(): void {
    this.loginService.isLogged
      .subscribe((data: boolean) => {
        this.isLogged = data;
      });
  }

  public logout(): void {
    this.loginService.logout()
      .subscribe(() => this.loginService.toggle());
  }
}
