const data = [{
  id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: "/app/dashboards",
    subs: [{
        icon: "simple-icon-briefcase",
        label: "menu.information",
        to: "/app/dashboards/information"
      },
      {
        icon: "simple-icon-pie-chart",
        label: "menu.capital",
        to: "/app/dashboards/capital"
      },
      {
        icon: "simple-icon-earphones-alt",
        label: "menu.consultation",
        to: "/app/dashboards/consultation"
      },
      {
        icon: "simple-icon-notebook",
        label: "menu.data",
        to: "/app/dashboards/data"
      }
    ]
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
          icon: "iconsminds-cash-register-2",
          label: "menu.inflow",
          to: "/capital/cashflow/inflow"
        },
        {
          icon: "iconsminds-mail-money",
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
  }
];
export default data;
