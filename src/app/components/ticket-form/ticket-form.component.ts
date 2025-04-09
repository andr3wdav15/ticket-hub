import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket-form.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent {
  @Output() purchaseComplete = new EventEmitter<{
    name: string;
    email: string;
    quantity: number;
  }>();

  ticketForm: FormGroup;
  isSubmitting = false;
  ticketQuantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
  ) {
    this.ticketForm = this.fb.group({
      concertId: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[0-9\+\-\(\)\s]+$/)],
      ],
      quantity: ['', [Validators.required, Validators.min(1)]],
      creditCard: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{16}$/),
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      expiration: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(0[1-9]|1[0-2])\/(2[0-9])$/),
        ],
      ],
      securityCode: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}$/),
          Validators.minLength(3),
          Validators.maxLength(3),
        ],
      ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/),
        ],
      ],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = null;

      const ticketData = this.ticketForm.value;

      this.ticketService.sendTicket(ticketData).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.purchaseComplete.emit({
            name: ticketData.name,
            email: ticketData.email,
            quantity: ticketData.quantity,
          });
          this.ticketForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.errorMessage =
            'Failed to submit ticket purchase. Please try again.';
          console.error('Error submitting ticket:', error);
        },
      });
    }
  }
}
