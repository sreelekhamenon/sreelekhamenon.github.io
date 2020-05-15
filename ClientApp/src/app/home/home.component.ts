import { Component,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  inputText:string;
  subText:string;
  compareResult:CompareResult={};
  baseUrl:string
  http: HttpClient
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
  this.baseUrl = baseUrl;  
  this.http = http;
  }

  public getIndexOfSubtext() {
    this.compareResult["Description"] = this.subText + this.inputText;
    this.compareResult["IsValid"] = true
    
    this.inputText = this.inputText.trim();
    this.subText = this.subText.trim();
    // this.http.get<CompareResult>(this.baseUrl + 'weatherforecast').subscribe(result => {
    //   this.compareResult = result[0].result;
    // }, error => console.error(error));
  }
}

interface CompareResult {
  IsValid?: boolean;
  Description?: string;
  queryText?: string;
  querySubText?:string;
}