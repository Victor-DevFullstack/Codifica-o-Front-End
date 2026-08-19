import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  nome = "Notebook";
  preco = 5000.00;
  mostrarPreco = true;

  produtos = [
    {nome:'Monitor', preco:1500},
    {nome:'Mouse', preco:150},
    {nome:'Teclado', preco:300}
  ];
}
