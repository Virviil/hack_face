import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-driver-wizard',
    templateUrl: './driver-wizard.component.html',
    styleUrls: ['./driver-wizard.component.scss'],
})
export class DriverWizardComponent implements OnInit {

    constructor(private http: HttpClient,
                private router: Router) {
    }

    ngOnInit() {
    }

    submitDriverLicence(value: boolean) {
        this.http.post('api/actions/driver_license', {
            user_id: localStorage.getItem('user_id'),
            more_then_5_years: value
        }).subscribe(() => {
            this.router.navigate(['tabs/current-status-tab']);
        });
    }
}
