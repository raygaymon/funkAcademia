import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit {

  private fb = inject(FormBuilder)
  scores: FormGroup

  allScores: Scores[] = []

  ngOnInit():void{
    this.scores = this.fb.group({
      'jasonScore': this.fb.control<number>(0),
      'jBongScore': this.fb.control<number>(0),
      'nicScore': this.fb.control<number>(0),
      'titusScore': this.fb.control<number>(0),
    })
  }

  submit(){
    let s : Scores = this.scores.value
    console.log(s)
    s.totalScore = s.jBongScore + s.jasonScore + s.titusScore + s.nicScore
    this.allScores.push(s)
    alert("Score submitted successfully. Scores:\nNic: " + s.nicScore +"\nJason: " + s.jasonScore + "\nJ-Bong: " + s.jBongScore + "\nTitus: " + s.titusScore + "\nTotal: " + s.totalScore)
  }

  clearList(){
    this.allScores = []
    alert("Recorded scores cleared")
  }

}

export interface Scores {
  jasonScore: number,
  jBongScore: number,
  nicScore: number,
  titusScore: number,
  totalScore: number
}
