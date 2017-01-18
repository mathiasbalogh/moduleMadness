

exports.monetized = function(total){
  return total.toLocaleString('en-IN', {style:'currency', currency:'USD'});
}
