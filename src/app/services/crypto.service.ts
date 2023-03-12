import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private appService: AppService, private http : HttpClient) { }

  getCurrency(currency:string){
    return this.appService.get(environment.baseUrl + `markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency(currency:string){
    return this.appService.get(environment.baseUrl + `markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
    return this.appService.get(environment.baseUrl + `${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }
  getCurrencyById(coinId:string){
    return this.appService.get(environment.baseUrl + `${coinId}`)
  }
}
