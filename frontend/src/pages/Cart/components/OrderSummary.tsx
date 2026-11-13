const DEMO_SHIPPING = 5.0

interface OrderSummaryProps {
  subtotal: number
}

export function OrderSummary({ subtotal }: OrderSummaryProps) {
  const total = subtotal + DEMO_SHIPPING

  return (
    <div className="bg-white rounded-3xl border border-[#E8DFC9] p-6 sm:p-8 space-y-5 sticky top-24">
      <h2 className="text-lg font-black text-[#25272B] tracking-tight">
        Tóm tắt đơn hàng
        <span className="block text-xs font-semibold text-[#25272B]/50 tracking-normal mt-0.5">
          Order Summary
        </span>
      </h2>

      {/* Line items */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-[#25272B]/70 font-medium">
            Tạm tính • Subtotal
          </span>
          <span className="font-bold text-[#25272B]">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <span className="text-[#25272B]/70 font-medium">
              Phí vận chuyển • Shipping
            </span>
            <p className="text-[11px] text-[#F4775B] font-medium mt-0.5">
              * Mức phí minh họa – sẽ được tính chính xác khi thanh toán
            </p>
          </div>
          <span className="font-bold text-[#25272B] ml-4 shrink-0">
            ${DEMO_SHIPPING.toFixed(2)}
          </span>
        </div>

        <div className="pt-3 border-t border-[#E8DFC9] flex justify-between items-center">
          <span className="font-black text-[#25272B]">
            Tổng cộng • Total
          </span>
          <span className="text-xl font-black text-[#25272B]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout CTA – disabled placeholder */}
      <div className="space-y-3 pt-1">
        <button
          type="button"
          disabled
          title="Đăng nhập để tiến hành thanh toán • Login required for checkout"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#3457E5] text-white text-sm font-bold shadow-xs cursor-not-allowed opacity-60 select-none"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          <span>Thanh toán • Checkout</span>
        </button>

        <p className="text-[11px] text-[#25272B]/50 text-center leading-snug">
          🔐 Tính năng thanh toán sẽ ra mắt trong phiên bản tiếp theo.
          <br />
          <span className="italic">
            Checkout coming soon – authentication required.
          </span>
        </p>
      </div>

      {/* Trust badges */}
      <div className="pt-3 border-t border-[#E8DFC9] space-y-2">
        {[
          { icon: '🚚', text: 'Giao hàng toàn quốc • Free nationwide shipping' },
          {
            icon: '↩️',
            text: 'Đổi trả miễn phí trong 7 ngày • Free 7-day returns',
          },
          { icon: '🔒', text: 'Thanh toán bảo mật • Secure checkout' },
        ].map((badge) => (
          <div
            key={badge.text}
            className="flex items-center gap-2 text-[11px] text-[#25272B]/60 font-medium"
          >
            <span aria-hidden="true">{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

