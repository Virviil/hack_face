import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CurrentStatusTabResolver implements Resolve<any> {

    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return of({
            rights: [
                {
                    name: 'Right',
                    description: 'You have right for...',
                    end_date: new Date()
                },
                {
                    name: 'Another Right',
                    description: 'And one more',
                    end_date: new Date()
                },
                {
                    name: 'Last thing',
                    description: 'but not least',
                    end_date: new Date()
                }
            ],
            suggestions: [
                {
                    name: 'Right',
                    description: 'You have right for...',
                    end_date: new Date()
                },
                {
                    name: 'Another Right',
                    description: 'And one more',
                    end_date: new Date()
                },
                {
                    name: 'Last thing',
                    description: 'but not least',
                    end_date: new Date()
                }
            ]
        });
    }
}
