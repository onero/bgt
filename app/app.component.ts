import {Component} from 'angular2/core';
import {PlayerService} from './player.service';
import {GameService} from './game.service';

@Component({
    selector: 'my-app',
    template: `
      <ul class="nav nav-pills">
        <li [class.active]="year == '2015'"><a (click)="year = '2015'">2015</a></li>
        <li [class.active]="year == '2016'"><a (click)="year = '2016'">2016</a></li>
      </ul>
          <div [ngSwitch]="year">
            <template [ngSwitchWhen]="'2015'" ngSwitchDefault>
            <h1>Board Game Tournament 2015</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>- Players -</th>
                        <th *ngFor="#game of games"> {{ game }}</th>
                        <th>Joker</th>
                        <th>Points Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#player of players">
                        <th>{{ player }}</th>
                        <td *ngFor="#game of games">
                        </td>
                    </tr>
                </tbody>
            </table>
            </template>

            <template [ngSwitchWhen]="'2016'">
            <h1>Board Game Tournament 2016</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>- Players -</th>
                        <th *ngFor="#game of games"> {{ game }}</th>
                        <th>Joker</th>
                        <th>Points Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#player of players">
                        <th>{{ player }}</th>
                        <td *ngFor="#game of games">
                        </td>
                    </tr>
                </tbody>
            </table>
            </template>
          </div>
    `,
    providers: [PlayerService, GameService]

})
export class AppComponent {
    players;
    games;
    year = '2015';

    constructor(playerService: PlayerService, gameService: GameService) {
        this.players = playerService.getPlayers();
        this.games = gameService.getGames();
    }
}
