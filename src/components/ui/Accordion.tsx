import { useId, useState, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

type AccordionItemProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-t border-ferresa-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            'flex w-full items-center justify-between gap-4 py-5 text-left text-nav font-semibold text-ferresa-ink transition-ferresa',
            'hover:text-ferresa-accent',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
          )}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{title}</span>
          <span aria-hidden="true" className="text-xl leading-none text-ferresa-muted">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={cn(!open && 'hidden')}
      >
        <div className="pb-5 text-body text-ferresa-muted">{children}</div>
      </div>
    </div>
  )
}
