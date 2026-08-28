import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = "";
  @Input() preco = 0;

  @Output() produtoSelecionado = new EventEmitter<string>();
  @Output() produtoAdicionado = new EventEmitter<{nome: string; preco: number}>()

  selecionarProduto(){
    this.produtoSelecionado.emit(this.nome)
  }

  adicionarAoCarrinho(){
    this.produtoAdicionado.emit({nome: this.nome, preco: this.preco});
  }
}
