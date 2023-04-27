import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'School';
  aufgabe_84_2_target: number = 0;
  aufgabe_84_2_guesses: number = 0;

  constructor() { }

  randomize_target(){
    this.aufgabe_84_2_target = Math.round(Math.random() * 99 + 1);
    this.aufgabe_84_2_guesses = 0;
  }

  ngOnInit(): void { 
    this.randomize_target();
  }

  isValidNumberString(str: string): boolean {
    const num = parseFloat(str);
    return Number.isFinite(num);
  }
  clamp(value: number, min :number, max :number): number {
    return Math.max(min, Math.min(value, max));
  }
  //76.1 a)
  aufgabe_76_1_range_a(): string{
    let result: string = "";
    for (let i = 1; i < 5; i++){
      result += String(i) + " ";
    }
    return result;
  }
  //76.1 b)
  aufgabe_76_1_range_b(): string{
    let result: string = "";
    for (let i = 3; i < 5; i++){
      result += String(i) + " ";
    }
    return result;
  }
  //76.1 c)
  aufgabe_76_1_range_c(): string{
    let result: string = "";
    for (let i = 0; i < 100; i += 2){
      result += String(i) + " ";
    }
    return result;
  }
  aufgabe_76_2(): string{
    let animals: string[] = ["tiger", "mouse", "bird", "python", "elephant", "monkey"];

    let result: string = "";
    for (let i = 0; i < animals.length; i++){
      result += animals[i] + " ist ein Tier.\n";
    }
    
    return result;
  }

  
  aufgabe_76_3_words: string[] = [];

  aufgabe_76_3_add(input: string): void {
    this.aufgabe_76_3_words.push(input);
  }
  aufgabe_76_3_clear(): void {
    this.aufgabe_76_3_words = [];
  }
  aufgabe_76_3(): string {
    let result: string = "";
    for (let i = 0; i < this.aufgabe_76_3_words.length; i++){
      result += this.aufgabe_76_3_words[i] + "\n";
    }
    return result;
  }

  aufgabe_79_1_result: string = "";

  aufgabe_79_1(input: string): void {
    if (!this.isValidNumberString(input)) {
      this.aufgabe_79_1_result = 'The input is not a valid number.';
      return;
    } 

    let inputNumber: number = Number(input);

    if (inputNumber > 10) {
      this.aufgabe_79_1_result = 'The number is greater than 10.';
    } 
    else {
      this.aufgabe_79_1_result = 'The number is not greater than 10.';
    }
  }

  aufgabe_79_2_numbers: number[] = [];

  //79.2
  aufgabe_79_2_add(input: string): void {
    if (this.isValidNumberString(input)) {
      let inputNumber: number = Number(input);
      this.aufgabe_79_2_numbers.push(inputNumber);
    }
  }
  aufgabe_79_2_clear(): void {
    this.aufgabe_79_2_numbers = [];
  }
  aufgabe_79_2(): string {
    if (this.aufgabe_79_2_numbers.length == 0){
      return "";
    }
    let min: number = Number.MAX_VALUE;
    let max: number = Number.MIN_VALUE;

    for (let i = 0; i < this.aufgabe_79_2_numbers.length; i++){
      let current = this.aufgabe_79_2_numbers[i];
      if (min > current){
        min = current;
      }
      if (max < current){
        max = current;
      }
    }
    return "min = " + min + ", max = " + max;
  }

  
  aufgabe_79_3_result: string = "";

  aufgabe_79_3(input: string): void {
    if (!this.isValidNumberString(input)) {
      this.aufgabe_79_3_result = 'The input is not a valid number.';
      return;
    } 

    let inputNumber: number = Number(input);
    let is_prime: boolean = false;

    if (inputNumber % 400 == 0){
      is_prime = true;
    }
    else if (inputNumber % 100 == 0){
      is_prime = false;
    }
    else if (inputNumber % 4 == 0){
      is_prime = true;
    }


    if (is_prime) {
      this.aufgabe_79_3_result = "The number " + inputNumber + " is a leap year.";
    } 
    else {
      this.aufgabe_79_3_result = "The number " + inputNumber + " is not a leap year.";
    }
  }

  aufgabe_79_4_result: string = "";

  aufgabe_79_4(grade: string, darkEyeColor: boolean, longHair: boolean, niceWeather: boolean, hasSushi: boolean, isStrong: boolean): void {
    if (!grade) {
      this.aufgabe_79_4_result = 'Please enter a grade.';
      return;
    }
  
    let gradeNumber: number = Number(grade);
  
    if (gradeNumber < 1 || gradeNumber > 6) {
      this.aufgabe_79_4_result = 'Please enter a valid grade (1-6).';
      return;
    }

    let factor:number = 0.1;

    if (darkEyeColor){
      if (longHair){
        gradeNumber *= (1 - factor);
      }
      else{
        gradeNumber *= (1 + factor);
      }
    }
    else{
      if (longHair){
        gradeNumber *= (1 + factor);
      }
      else{
        gradeNumber *= (1 - factor);
      }
    }

    if (niceWeather){
      gradeNumber -= 0.5;
    }
    if (hasSushi){
      gradeNumber -= 1.0;
    }
    if (isStrong){
      gradeNumber -= 0.5;
    }
  
    gradeNumber = this.clamp(gradeNumber, 1, 6);

    gradeNumber = Math.round(gradeNumber * 2) / 2;
    this.aufgabe_79_4_result = `Grade: ${gradeNumber}`;
  }  
  
  aufgabe_83_1(): string{

    let result: string = "";
    let n: number = 1;
    while(n < 100) {
      result += String(n) + " ";
      n++;
    }
    return result;
  }


  aufgabe_83_2_result: string = "";
  aufgabe_83_2(input: string): void {
    if (!this.isValidNumberString(input)) {
      this.aufgabe_83_2_result = 'The input is not a valid number.';
      return;
    } 
  
    let capital: number = Number(input);

    let rate = 0.1;
    let years = 0;
    while (capital < Math.pow(10, 7)){
      capital *= (1 + rate);
      years++;
    }
  
    this.aufgabe_83_2_result = `You need to wait ${years} years.`;
  }

  
  aufgabe_83_3_result: string = "";
  aufgabe_83_3(cash: string, year: string): void {
    if (!this.isValidNumberString(cash)) {
      this.aufgabe_83_3_result = 'The cash value is not a valid number.';
      return;
    } 
    if (!this.isValidNumberString(year)) {
      this.aufgabe_83_3_result = 'The year value is not a valid number.';
      return;
    } 
  
    let cash_number: number = Number(cash);
    let year_number: number = Number(year);

    this.aufgabe_83_3_result = "";
    let depreciation = cash_number / year_number;
    while (year_number){
      cash_number -= depreciation;
      year_number--;

      this.aufgabe_83_3_result += `Year ${year_number}: ${cash_number.toFixed(2)}$\n`;
    }
  }

  
  aufgabe_83_4_result: string = "";
  aufgabe_83_4(): void {
    this.aufgabe_83_4_result = "";
    while (true){
      let roll = Math.round(Math.random() * 5 + 1);

      this.aufgabe_83_4_result += `Rolled a ${roll}\n`;

      if (roll == 6){
        this.aufgabe_83_4_result += `finished`;
        break;
      }
    }
  }
  
  aufgabe_84_1_result: string = "";
  aufgabe_84_1(): void {

    let dice: number[] = [0, 0, 0, 0, 0, 0];
    let sum: number = 0;

    this.aufgabe_84_1_result = "";
    while (true){
      let roll = Math.round(Math.random() * 5 + 1);
      dice[roll - 1]++;
      sum += roll;


      if (sum >= 100){
        this.aufgabe_84_1_result += `Sum = ${sum}\n`;
        for (let i = 0; i < dice.length; i++){
          this.aufgabe_84_1_result += `${i + 1}: ${dice[i]}\n`;
        }
        break;
      }
    }
  }
  
  aufgabe_84_2_result: string = "";
  aufgabe_84_2(input: string): void {
    if (!this.isValidNumberString(input)) {
      this.aufgabe_84_2_result = 'not a valid number.';
      return;
    } 
    
    const max_guess:number = 7;
    let guess: number = Number(input);
    if (guess == this.aufgabe_84_2_target){
      this.aufgabe_84_2_result = `${input} was the target!`;
      this.randomize_target();
      return;
    }
    else if (guess < this.aufgabe_84_2_target){
      this.aufgabe_84_2_result = `(${this.aufgabe_84_2_guesses + 1} / ${max_guess}) the target is bigger than ${input}.`;
    }
    else if (guess > this.aufgabe_84_2_target){
      this.aufgabe_84_2_result = `(${this.aufgabe_84_2_guesses + 1} / ${max_guess}) the target is smaller than ${input}.`;
    }

    
    this.aufgabe_84_2_guesses++;
    if (this.aufgabe_84_2_guesses >= max_guess){
      this.aufgabe_84_2_result = 'Out of guesses! Try again.';
      this.randomize_target();
    }
  }
}