import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';

  onNameChange(input: string): void {
    this.name = input;
  }

  onDateChange(input: string): void {
    this.date = input;
  }

  onAmountChange(input: string): void {
    this.amount = input;
  }
}
