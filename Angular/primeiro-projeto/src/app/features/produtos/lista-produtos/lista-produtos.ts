import { Component, signal, computed, effect, inject} from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutosService } from '../produtos.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto,MatButtonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  
  erro = signal<string | null>(null)
  
  private ProdutosService = inject(ProdutosService)

  produtos = signal<{nome: string; preco: number}[]>([]);

  carregando = signal(true);

  produtoSelecionado = signal<string | null>(null);

  //Carrinho
  carrinho = signal<{ nome: string; preco: number }[]>([]);

  adicionarAoCarrinho(produto: { nome: string; preco: number}) {
    this.carrinho.update(ListaAtual => [
      ...ListaAtual,
      produto
    ])
  };

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho =   computed(() => {
    return this.carrinho().reduce((total, item) => total + item.preco, 0);
  });
  //final carrinho

  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  exibirProduto(nome:string){
    this.produtoSelecionado.set(nome)
  }

  adicionarProduto(){
    this.produtos.update(listaAtual => 
    [... listaAtual,{nome:'Teclado', preco:250}]
    );
  }

  substituirProdutos(){
    this.produtos.set([{nome:'Produto Novo', preco:1989}])
  }

  constructor(){
    this.carregarProdutos();

    effect(() => {
      console.log(`Lista de produtos alterada: ${this.produtos()}`)
    });

    effect(() => {
      console.log(`Valor total atualizado: ${this.valorTotal()}`)
    });

    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });

    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
  };
    //=================================//
   //      Método de Requisição       // 
  //=================================//

  carregarProdutos() {
    this.erro.set(null);
    this.carregando.set(true);
    this.ProdutosService.buscarProdutos().subscribe({
      next: (dados) => {
        const produtos = this.ProdutosService.transformarProdutos(dados);
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        this.erro.set('Erro ao carregar produtos. Verifique sua conexão e tente novamente.');
        this.carregando.set(false);
      },
    });
  } 
}
