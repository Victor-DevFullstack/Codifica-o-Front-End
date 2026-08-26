import { Component, signal, computed, effect, inject} from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  ProdutosService = inject(ProdutosService)

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

  constructor(private http: HttpClient){
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

   /*carregarProdutos() {

      // inicia loading
      this.carregando.set(true);

      this.http.get<{ title: string; price: number }[]>
      ('https://fakestoreapi.com/products')
      .subscribe({
      next: (dados) => {

        // Adaptação da API para o nosso projeto
        const produtosFormatados = dados.map(p => ({
          nome: p.title,
          preco: p.price
        }));

          this.produtos.set(produtosFormatados);
          this.carregando.set(false); // finaliza loading
        },

        error: (erro) => {
          console.error('Erro ao carregar produtos:', erro);
          this.carregando.set(false); // evita loading infinito
        }
      });
    }*/
}
