import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WelcomeWizardService {

    constructor(private http: HttpClient) {
    }

    makeInitAction(param: any): Observable<any> {
        param.aliah_date = new Date(param.aliah_date).toISOString().split('T')[0];

        return this.http.post('api/actions/init', param)
            .pipe(tap(res => {
                localStorage.setItem('user_id', res.user_id);
            }));
    }
}
