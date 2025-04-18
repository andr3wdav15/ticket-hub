import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketConfirmationComponent } from './ticket-confirmation.component';

describe('TicketConfirmationComponent', () => {
  let component: TicketConfirmationComponent;
  let fixture: ComponentFixture<TicketConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
