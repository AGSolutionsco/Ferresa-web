import { generateWhatsAppLink, defaultWhatsAppMessage } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

type WhatsAppButtonProps = {
  message?: string
  className?: string
  /** Si false, renderiza un enlace inline en lugar del flotante */
  floating?: boolean
  label?: string
}

export function WhatsAppButton({
  message = defaultWhatsAppMessage,
  className,
  floating = true,
  label = 'Escribir por WhatsApp',
}: WhatsAppButtonProps) {
  const href = generateWhatsAppLink(message)

  if (!floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[#1f5c45] px-4 py-2.5 text-button text-white transition-ferresa',
          'hover:bg-[#184836]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
          className,
        )}
      >
        <WhatsAppIcon />
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        'fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#1f5c45] text-white shadow-lift',
        'transition-ferresa hover:scale-[1.04] hover:bg-[#184836] active:scale-100',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ferresa-focus',
        'sm:right-6 sm:bottom-6',
        className,
      )}
    >
      <WhatsAppIcon />
      <span className="sr-only">{label}</span>
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.36 2.15 11.72c0 1.9.52 3.75 1.51 5.38L2 22l5.08-1.61a10.1 10.1 0 0 0 4.96 1.26h.01c5.46 0 9.89-4.36 9.89-9.72C21.94 6.36 17.5 2 12.04 2Zm0 17.74h-.01a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-3.01.96 1-2.93-.2-.31a8.08 8.08 0 0 1-1.24-4.3c0-4.47 3.71-8.11 8.28-8.11 4.56 0 8.27 3.64 8.27 8.11 0 4.47-3.71 8.12-8.27 8.12Zm4.54-6.06c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.38-2-1.22-.74-.65-1.24-1.45-1.38-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.83-.86 2.03s.88 2.35 1 2.51c.12.16 1.73 2.63 4.2 3.69.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}
