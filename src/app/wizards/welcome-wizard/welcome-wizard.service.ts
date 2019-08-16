import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WelcomeWizardService {
    isLoading: boolean;

    constructor(private http: HttpClient) {
    }

    makeInitAction(param: any): Observable<any> {
        this.isLoading = true;
        param.aliah_date = new Date(param.aliah_date).toISOString().split('T')[0];

        return this.http.post('api/actions/init', param)
            .pipe(tap(res => {
                    this.isLoading = false;
                    localStorage.setItem('user_id', res.user_id);
                }),
                catchError(() => {
                    this.isLoading = false;
                    return null;
                }));
    }
}
