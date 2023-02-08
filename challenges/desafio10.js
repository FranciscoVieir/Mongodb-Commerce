db.produtos.find({
  valoresNutricionais:
  {
    $elemMatch: {
      $and: [
        { tipo: "proteínas" },
        { percentual: { $gte: 30, $lte: 40 } },
      ],
    },
  },
}, { nome: 1, _id: 0 });
