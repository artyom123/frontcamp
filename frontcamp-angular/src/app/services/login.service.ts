import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  public isLogged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkPermissions()
      .subscribe(data => this.isLogged.next(data.status));
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post('api/login', { email, password }, { responseType: 'text' });
  }

  public logout(): Observable<any> {
    return this.http.get('api/logout', { responseType: 'text' });
  }

  public toggle(): void {
    this.isLogged.next(!this.isLogged.getValue());
  }

  private checkPermissions(): Observable<any> {
    return this.http.get('api/checkPermissions')
      .pipe(
        catchError(() => [])
      );
  }
}
