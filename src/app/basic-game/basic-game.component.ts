import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-game',
  templateUrl: './basic-game.component.html',
  styleUrls: ['./basic-game.component.css']
})
export class BasicGameComponent implements OnInit {
  inGame: boolean = false;
  gameStatusMessage: string = 'Make your selection...';
  gameOutcome: string = 'Pending';
  choices: string[] = ['Rock','Paper','Scissors'];
  computerSelection: string = 'Not Ready';

  constructor() { }

  ngOnInit(): void {
  }

  computerSelect() {
    let randomIndex = Math.floor(Math.random()*3);
    this.computerSelection = this.choices[randomIndex];
  }

  playGame(playerChoice:string) {
    this.inGame=true;
    this.computerSelect();
    if (this.computerSelection === playerChoice) {
      this.gameOutcome = 'tie';
      this.gameStatusMessage = `It's a tie! We both picked ${playerChoice}`;
    } else if ((this.computerSelection === 'Rock' && playerChoice === 'Scissors') || (this.computerSelection === 'Paper' && playerChoice === 'Rock') || (this.computerSelection === 'Scissors' && playerChoice === 'Paper')) {
      this.gameOutcome = 'lose';
      this.gameStatusMessage = `You Lose! ${this.computerSelection} beats ${playerChoice}.`
    } else {
      this.gameOutcome = 'win';
      this.gameStatusMessage = `You Won! ${playerChoice} beats ${this.computerSelection}.`
    }
  }

  handleBanana() {
    this.gameStatusMessage="Hey, this isn't Rock Paper Banana!"
  }

}
