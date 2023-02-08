db.produtos.find({
  ingredientes: "picles",
},
  { nome: 1, ingredientes: 1, _id: 0, valoresNutricionais: { $slice: 3 } });
