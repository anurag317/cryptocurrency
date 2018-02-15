import { Component, OnInit } from '@angular/core';
import { CoinApiService } from './curr-cards.service'
@Component({
  selector: 'app-curr-cards',
  templateUrl: './curr-cards.component.html',
  styleUrls: ['./curr-cards.component.scss'],
  providers: [CoinApiService]
})
export class CurrCardsComponent implements OnInit {

  constructor(private coinApiService: CoinApiService) { }

  ngOnInit() {
    this.coinApiService.getAllCoins().subscribe(
      resultArray => {
        debugger;
        console.log(resultArray.Data);
      },
      error => console.log("Error :: " + error)
    )
  }

}
