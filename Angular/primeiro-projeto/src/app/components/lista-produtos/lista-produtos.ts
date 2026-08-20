import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: "Notebook", preco: 3989},
    {nome: "Mouse", preco: 179}
  ];

  exibirProduto(nome:string){
    console.log(`Produto selecionado: ${nome}`)
  }
}
