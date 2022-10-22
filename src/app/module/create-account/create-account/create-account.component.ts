import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/input/Transactions';
import { SavingAccountService } from 'src/app/services/saving-account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  private URL: string = 'Transaction/CreateAccount';
  formGroupAccount!: FormGroup;
  transaction!: Transaction;
  @Output() productTypeNewOut = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private accountService: SavingAccountService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.buildformGroupAccount()
  }

  addAccount(transaction: Transaction) {
    debugger;

    this.accountService.post(this.URL, this.formGroupAccount.getRawValue()).subscribe(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Cuenta cargada!`,
        showConfirmButton: false,
        timer: 1500
      });

    });
  }

  //Reactive Form, Validators and getters of Fields
  buildformGroupAccount() {
debugger
    this.formGroupAccount = this.formBuilder.group({
      clientName: [null, [Validators.required]],
      id: [null, [Validators.required,Validators.maxLength(10)]],
      amount: [null, [Validators.required]],
      percent: [3,],
      month: [12]

    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.formGroupAccount.valid) {
      this.addAccount(this.formGroupAccount.value);
    }

  }
  get idField() {
    return this.formGroupAccount.get('id');
  }
  get nameField() {
    return this.formGroupAccount.get('clientName');
  }
  get percetField() {
    return this.formGroupAccount.get('percent');
  }

  get monthField() {
    return this.formGroupAccount.get('month');
  }
  get amountField() {
    return this.formGroupAccount.get('amount');
  }


}
