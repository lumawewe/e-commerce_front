import { Component } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss']
})
export class CarteiraComponent {
  minutes: number = 10;
  seconds: number = 0;
  isCounting: boolean = false;
  

  ngOnInit(): void {
  }

  startCountdown() {
    if (!this.isCounting) {
      this.isCounting = true;
      const timerInterval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(timerInterval);
          this.isCounting = false;
        }
      }, 1000);
    }
  }
}
