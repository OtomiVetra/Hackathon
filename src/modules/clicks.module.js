import {Module} from '../core/module'

export class ClicksModule extends Module {

  constructor(text, durationMs) {
    super('clickAnalytics', text);
    this.durationMs = durationMs || 10000;
    this.clicks = 0;
    this.doubleClicks = 0;
    this.timeoutId = null;
  }

  trigger() {
    this.clicks = 0;
    this.doubleClicks = 0;
    this.addEventListeners();
    this.timeoutId = setTimeout(() => {
      this.showResults();
    }, this.durationMs);
  }

  addEventListeners() {
    document.addEventListener('click', this.onSingleClick.bind(this));
    document.addEventListener('dblclick', this.onDoubleClick.bind(this));
  }

  removeEventListeners() {
    document.removeEventListener('click', this.onSingleClick.bind(this));
    document.removeEventListener('dblclick', this.onDoubleClick.bind(this));
  }

  onSingleClick() {
    this.clicks++;
  }

  onDoubleClick() {
    this.doubleClicks++;
    this.clicks -= 2;
  }

  showResults() {
    this.removeEventListeners();
    console.log(`Статистика кликов: 
Одинарные клики: ${this.clicks} 
Двойные клики: ${this.doubleClicks}`);
  }
}