import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { FiShoppingCart } from "react-icons/fi"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <div className="relative group block">
      <LocalizedClientLink
        href={`/products/${product.handle}`}
        className="block"
      >
        <div
          data-testid="product-wrapper"
          className="bg-beige border border-[#d4c7ae] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="overflow-hidden border-b border-[#d4c7ae] rounded-md">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="transition-transform duration-300 group-hover:scale-105 h-64"
            />
          </div>

          <div className="p-2 flex flex-col gap-2">
            <Text
              className="text-green-900 font-serif text-base font-medium transition-colors"
              data-testid="product-title"
            >
              {product.title}
            </Text>

            <div className="flex items-center justify-between">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
              <button
                className="p-2 rounded-full bg-white border border-green-800 transition-transform hover:scale-105"
                aria-label="Add to cart"
              >
                <FiShoppingCart className="w-4 h-4 text-green-900 font-bold" />
              </button>
            </div>
          </div>
        </div>
      </LocalizedClientLink>
    </div>
  )
}
