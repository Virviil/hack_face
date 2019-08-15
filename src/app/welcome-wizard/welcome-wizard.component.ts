import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'welcome-wizard.component.html',
    styleUrls: ['welcome-wizard.component.scss']
})
export class WelcomeWizardComponent implements OnInit {

    welcomeWizard: FormGroup = this.fb.group({
        aliah_date: this.fb.control(null),
        gender: this.fb.control(null),
        age: this.fb.control(null),
        marital_status: this.fb.control(null),
        number_of_children: this.fb.control(null)
    });

    readonly genders: string[] = [
        'Male',
        'Female'
    ];
    readonly maritalStatuses: string[] = [
        'Married',
        'Single'
    ];

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit() {
    }

    submitWelcomeWizard(value: any) {
        // this.http.post('api/actions/init', value)
        //     .subscribe((res) => {
        this.router.navigate(['tabs/current-status-tab']);
        // });
    }
}
