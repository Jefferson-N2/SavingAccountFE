import { Component, OnInit } from '@angular/core';
import { EClient } from 'src/app/models/output/EClient';
import { LoaderService } from '../../../services/loader.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SavingAccountService } from 'src/app/services/saving-account.service';
import { EAccount } from 'src/app/models/output/EAccount';
import { Balance } from 'src/app/models/input/Balance';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  private URL: string = 'Client/SearchClients';

  clients: EClient[] = [];
  account: EAccount[] = [];
  name = 'Angular 5';

  modalRef!: BsModalRef;
  balance: Balance[] = [];

  constructor(
    private modalService: BsModalService,
    private savingAccountService: SavingAccountService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAccount();
    this.modalService.onHide.subscribe((e) => {

      console.log('close', this.modalService.config.initialState);

    });
  }


  getAccount() {
    this.loaderService.loaderState();
    this.savingAccountService.get(`${this.URL}`).subscribe((resp) => {
      this.clients = resp.$values as EClient[];
      this.loaderService.loaderState(false);
    });
  }



}
