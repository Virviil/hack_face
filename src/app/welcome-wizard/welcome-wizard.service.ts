import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WelcomeWizardService {

    constructor(private http: HttpClient) {
    }

    makeInitAction(param: any): Observable<any> {
        // return this.http.post('api/actions/init', param);
        return of({});
    }
}
