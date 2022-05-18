import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-datepicker',
  templateUrl: './my-datepicker.component.html',
  styleUrls: ['./my-datepicker.component.scss'],
})
export class MyDatepickerComponent {
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });

  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });
}
