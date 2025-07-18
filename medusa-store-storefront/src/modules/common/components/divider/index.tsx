import { clx } from "@medusajs/ui"

const Divider = ({ className }: { className?: string }) => (
  <div
    className={clx("h-px w-full border-b border-[#d4c7ae] mt-1", className)}
  />
)

export default Divider
