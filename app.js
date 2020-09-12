var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];


function domain(x, y, z) {
    let resultado = [];
    for (let i = 0, l = x.length; i < l; i++){
        for (let j = 0, k = 0, m = y.length, n = z.length; j < m; j++){
            resultado.push(pronoun[i]+ adj[j]+ noun[k] + ".com");
            if (j == m - 1 && k < n - 1){
               k++;
               j = -1;
            }
        }
    }
    console.log(resultado);
}
domain(pronoun, adj, noun);





