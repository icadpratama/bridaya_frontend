const data = [{
  id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: "/dashboards",
    subs: [{
        icon: "simple-icon-briefcase",
        label: "menu.information",
        to: "/dashboards/information"
      },
      {
        icon: "simple-icon-pie-chart",
        label: "menu.capital",
        to: "/dashboards/capital"
      },
      {
        icon: "simple-icon-earphones-alt",
        label: "menu.consultation",
        to: "/dashboards/consultation"
      },
      {
        icon: "simple-icon-notebook",
        label: "menu.data",
        to: "/dashboards/data"
      }
    ]
},
  {
    id: "cashiers",
    icon: "iconsminds-cash-register-2",
    label: "menu.cashiers",
    to: "/cashiers",
    subs: [{
      icon: "iconsminds-home-1",
      label: "menu.merchants",
      to: "/cashiers/merchants"
    },
    {
      icon: "iconsminds-chef-hat",
      label: "menu.items",
      to: "/cashiers/items"
    },
    {
      icon: "iconsminds-add-cart",
      label: "menu.order",
      to: "/cashiers/orders"
    },
    {
      icon: "iconsminds-receipt-4",
      label: "menu.transaction",
      to: "/cashiers/transactions"
    }
    ]
  },
  {
    id: "data",
    icon: "iconsminds-data-center",
    label: "menu.data",
    to: "/data",
    subs: [
      {
        icon: "iconsminds-money-bag",
        label: "menu.asset",
        to: "/data/asset"
      },
      {
        icon: "iconsminds-bank",
        label: "menu.liability",
        to: "/data/liability"
      },
      {
        icon: "iconsminds-handshake",
        label: "menu.equity",
        to: "/data/equity"
      }
    ]
  },
  {
    id: "capital",
    icon: "iconsminds-financial",
    label: "menu.capital",
    to: "/capital",
    subs: [{
      id: "cash-flow",
      label: "menu.cashflow",
      to: "/capital/cashflow",
      subs: [
        {
          icon: "iconsminds-add-basket",
          label: "menu.inflow",
          to: "/capital/cashflow/inflow"
        },
        {
          icon: "iconsminds-remove-basket",
          label: "menu.outflow",
          to: "/capital/cashflow/outflow"
        }
      ]
    },
    {
      icon: "iconsminds-check",
      label: "menu.reconsiliation",
      to: "/capital/reconsiliation/index"
    }]
  },
  {
    id: "information",
    icon: "iconsminds-pantone",
    label: "menu.information",
    to: "/information",
    subs: [
      {
        icon: "simple-icon-credit-card",
        label: "menu.product",
        to: "/information/product"
      }
    ]
  },
  {
    id: "consultation",
    icon: "iconsminds-headset",
    label: "menu.consultation",
    to: "/consultation",
    subs: [
      {
        icon: "simple-icon-bubbles",
        label: "menu.chat",
        to: "/consultation/chat"
      }
    ]
  }
];
export default data;
