const produits = [
    { id: 10, titre: 'PC HP 15', prix: 3000 },
    { id: 11, titre: 'Imprimante HP 17', prix: 800 },
    { id: 12, titre: 'PC ACER 17', prix: 4000 },
  ];
  
  const produitsChers = produits.filter((produit) => produit.prix >= 3500);
  console.log(produitsChers);
  