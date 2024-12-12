export declare const ORDER_ITEMS = "\nfragment OrderItems on OrderItem {\n  __typename\n  status\n  product_name\n  id\n  quantity_ordered\n  quantity_shipped\n  quantity_canceled\n  quantity_invoiced\n  quantity_refunded\n  quantity_returned\n  product_sale_price {\n    value\n    currency\n  }\n  selected_options {\n    label\n    value\n  }\n  product {\n    __typename\n    canonical_url\n    uid\n    name\n    sku\n    thumbnail {\n      label\n      url\n    }\n    price_range {\n      maximum_price {\n        regular_price {\n          currency\n          value\n        }\n      }\n    }\n  }\n}";
//# sourceMappingURL=orderItemsFragment.graphql.d.ts.map