
Meteor.methods({
  sidebar: function(){

    var menu = [
      {
        "text": "Vitrine de Prêmios",
        "sref": "app.gifts",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.premios"
      },
      {
        "text": "Minha conta",
        "sref": "app.me",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.minhaconta"
      },
      {
        "text": "Extrato",
        "sref": "app.balance",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.extrato"
      },
      {
        "text": "Regulamento",
        "sref": "app.terms",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.regulamento"
      },
      {
        "text": "Meus Vouchers",
        "sref": "app.vouchers",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.voucher"
      },

      {
        "text": "Contato",
        "sref": "app.singleview5",
        "icon": "fa fa-file-o",
        "translate": "sidebar.nav.contato"
      }

    ];


    return menu;
  }

});
