import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import * as React from "react"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border border-white/20 bg-slate-900/95 p-4 pr-8 shadow-lg backdrop-blur-xl transition-all",
          className
        )}
        {...props}
      >
        <div className="flex-1 text-sm text-slate-100">{children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-md p-1 text-slate-400 opacity-0 transition-opacity hover:text-slate-100 focus:opacity-100 group-hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
Toast.displayName = "Toast"

export { Toast }
