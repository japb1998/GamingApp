import { Component, OnInit } from '@angular/core';
import { Game, APIResponse } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sort: string;
  games: Game[];
  private routeSub: Subscription;
  private gameSub: Subscription;
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    //on init we get all of the params on the url then 
    //searchs for the games meeting the criteria
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacritic');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList.results);
      });
  }

  openGameDetails(id: string) {
    this.router.navigate(['details', id]);
  }
 

  //read docs about it 
  ngOnDestroy():void{
    if(this.gameSub){
      this.gameSub.unsubscribe()
    }
     if (this.routeSub) {
       this.routeSub.unsubscribe();
     }
  }
}
