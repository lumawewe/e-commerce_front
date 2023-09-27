import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-modal-historico-compra',
  templateUrl: './modal-historico-compra.component.html',
  styleUrls: ['./modal-historico-compra.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class ModalHistoricoCompraComponent {
  private modals: any[] = [];

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  open(id: string) {
    const modal = this.modals.find((modal) => modal.id === id);
    modal.open();
  }

  close(id: string) {
    const modal = this.modals.find((modal) => modal.id === id);
    modal.close();
  }
}
