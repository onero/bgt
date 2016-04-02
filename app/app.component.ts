import {Component} from 'angular2/core';
import {PlayerService} from './player.service';
import {GameService} from './game.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>Board Game Tournament 2015</h1>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#Players</th>
                <th *ngFor="#game of games, #i = index">Game {{ i + 1 }}</th>
                <th>Joker</th>
                <th>Points Total</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#player of players">
                <th>{{ player }}</th>
                <td *ngFor="#game of games">
                {{ game }}
                </td>
            </tr>
        </tbody>
    </table>
    `,
    providers: [PlayerService, GameService]

})
export class AppComponent {
    players;
    games;

    constructor(playerService: PlayerService, gameService: GameService) {
        this.players = playerService.getPlayers();
        this.games = gameService.getGames();
    }
}
