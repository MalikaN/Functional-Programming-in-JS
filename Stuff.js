var orders=[
{amount : 250},
{amount : 400},
{amount : 100},
{amount : 325}

]

var totCount =orders.reduce(function(sum,order){

return sum +order.amount
},0)


console.log(totCount  )