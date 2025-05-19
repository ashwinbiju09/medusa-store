import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items

  return (
    <div className=" rounded-md shadow-sm w-full">
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem] font-serif text-green-900">
          Cart
        </Heading>
      </div>

      <Table>
        <Table.Header className="border-t-0">
          <Table.Row className="text-green-800 font-medium text-sm ">
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="text-right">Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className="bg-beige px-2">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    currencyCode={cart?.currency_code}
                  />
                ))
            : repeat(5).map((i) => <SkeletonLineItem key={i} />)}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
