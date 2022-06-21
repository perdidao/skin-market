export interface InventoryAsset {
  appid: number
  contextid: string
  assetid: string
  classid: string
  instanceid: string
  amount: string
}

export interface InventoryItemDescription {
  type: string
  value: string
}

export interface InventoryItemAction {
  link: string
  name: string
}

export interface InventoryItemTag {
  category: string
  internal_name: string
  localized_category_name: string
  localized_tag_name: string
}

export interface InventoryDescription {
  appid: number
  classid: string
  instanceid: string
  currency: number
  background_color: string
  icon_url: string
  icon_url_large: string
  descriptions: InventoryItemDescription[]
  tradable: boolean
  actions: InventoryItemAction[]
  name: string
  name_color: string
  type: string
  market_name: string
  market_hash_name: string
  market_actions: InventoryItemAction[]
  commodity: number
  market_tradable_restriction: number
  marketable: number
  tags: InventoryItemTag[]
}

export interface Inventory {
  assets: InventoryAsset[]
  descriptions: InventoryDescription[]
  total_inventory_count: string
  success: boolean
  rwgrsn: number
}
