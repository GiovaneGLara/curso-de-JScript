function fatorial(n){
  if (n == 1){
      return 1
  }else{
      return n * fatorial(n - 1)
  }
}
 console.log(fatorial(5))




/* forma recursiva
5f = 5 x 4 x 3 x 2 x 1 posso reescrever assim...
5f = 5 x 4f  isso quer dizer que o fatorial de um número pode der calculado baseado  num fatorial de outro !
por exemplo:
  
n! = nx (n-1)!
1! = 1

*/
