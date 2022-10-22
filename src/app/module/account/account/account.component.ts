import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Balance } from 'src/app/models/input/Balance';
import { EAccount } from 'src/app/models/output/EAccount';
import { EBalance } from 'src/app/models/output/EBalance';
import { LoaderService } from '../../../services/loader.service';
import { SavingAccountService } from 'src/app/services/saving-account.service';

debugger
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private URL: string = 'Account/SearchAccountID';
  private URL_PARAM: string = '?id=';
  private idClient!: string;
  balance!: Balance[];
  account!: EAccount;


  constructor(
    private savingAccountService: SavingAccountService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private loaderService: LoaderService
  ) { }

  modalRef?: BsModalRef;
  balanceList: EBalance[] = [];
  accountList: EAccount[] = [];
  dataAccount!: string;

  ngOnInit(): void {
    this.getAccount(this.idClient);
 
  }


  getAccount(id: string) {
    
    this.loaderService.loaderState();
    this.idClient = this.route.snapshot.paramMap.get('id')!;
    this.savingAccountService.get(`${this.URL + this.URL_PARAM + this.idClient}`).subscribe((resp) => {

      this.accountList = resp.$values as EAccount[];
      this.loaderService.loaderState(false);

    });
  }

  displayStyle = "none";

  openModal(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
    debugger
    this.dataAccount = id;
  }

  closeModal() {
    this.modalRef?.hide();
  }
}
