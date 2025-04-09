import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TicketFormComponent } from '../../components/ticket-form/ticket-form.component';
import { EventDetailsComponent } from '../../components/event-details/event-details.component';
import { TicketConfirmationComponent } from '../../components/ticket-confirmation/ticket-confirmation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    TicketFormComponent,
    EventDetailsComponent,
    TicketConfirmationComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  purchaseCompleted = false;
  customerInfo = {
    name: '',
    email: '',
    quantity: 1,
  };

  onPurchaseComplete(customerData: {
    name: string;
    email: string;
    quantity: number;
  }) {
    this.customerInfo = customerData;
    this.purchaseCompleted = true;
  }
}
