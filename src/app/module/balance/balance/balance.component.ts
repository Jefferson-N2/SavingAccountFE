import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Balance } from 'src/app/models/input/Balance';
import { EBalance } from 'src/app/models/output/EBalance';
import { LoaderService } from '../../../services/loader.service';
import { SavingAccountService } from 'src/app/services/saving-account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  private URL: string = 'Balance/SearchBalanceID';
  private URL_PARAM: string = '?id=';

  modalRef: any;
  balance: Balance[] = [];
  balanceList: any;
  @Input() dataAccount: any;
  @Output() closeModal = new EventEmitter();

  constructor(private modalService: BsModalService,
    private savingAccountService: SavingAccountService,
    private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getBalance();
  }


  getBalance() {
    this.savingAccountService.get(`${this.URL + this.URL_PARAM + this.dataAccount}`).subscribe((resp) => {
      this.balanceList = resp.$values as EBalance[]
    });
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

}
