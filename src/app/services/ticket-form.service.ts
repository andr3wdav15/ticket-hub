import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface TicketPurchase {
  ConcertId: number;
  Email: string;
  Name: string;
  Phone: string;
  Quantity: number;
  CreditCard: string;
  Expiration: string;
  SecurityCode: string;
  Address: string;
  City: string;
  Province: string;
  PostalCode: string;
  Country: string;
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  sendTicket(ticketData: TicketPurchase): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.API_URL, ticketData);
  }
}
