import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { ChannelService } from 'src/app/services/channel.service';
import { Configuration } from 'src/app/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;
  public isVisible = true;
  public alertData: string;

  constructor(
    private location: Location,
    private loginService: LoginService,
    private router: Router,
    private channelService: ChannelService
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public cancel(): void {
    this.location.back();
  }

  public login(): void {
    this.loginService.login(this.form.value.username, this.form.value.password)
      .toPromise()
      .then((data) => {
        this.alertData = data;
        this.isVisible = false;
        this.loginService.toggle();
        setTimeout(() => this.router.navigateByUrl('/dashboard'), 2000);
        this.channelService.setVisibleForSource(Configuration.DATA_BASE_SOURCE);
      })
      .catch(err => {
        this.alertData = `Error ${err.status}: ${err.statusText}`;
        this.isVisible = false;
        setTimeout(() => this.router.navigateByUrl('/dashboard'), 2000);
      });
  }

  private createForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
