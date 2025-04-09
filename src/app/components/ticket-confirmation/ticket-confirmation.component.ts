import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-confirmation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './ticket-confirmation.component.html',
  styleUrls: ['./ticket-confirmation.component.scss'],
})
export class TicketConfirmationComponent {
  @Input() customerName: string = '';
  @Input() customerEmail: string = '';
  @Input() eventVenue: string = 'Budweiser Stage, Toronto';
  @Input() ticketQuantity: number = 1;
}
