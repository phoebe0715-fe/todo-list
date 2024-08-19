import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOverdueHighlight]'
})
export class OverdueHighlightDirective implements OnInit {
  @Input() appOverdueHighlight!: Date;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.highlightIfOverdue();
  }

  private highlightIfOverdue(): void {
    const today = new Date();
    if (this.isOverdue(this.appOverdueHighlight, today)) {
      this.elementRef.nativeElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    }
  }

  private isOverdue(dueDate: Date, currentDate: Date): boolean {
    return dueDate < currentDate;
  }
}
