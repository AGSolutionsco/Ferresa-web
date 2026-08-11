type ClassValue = string | false | null | undefined

/** Une clases CSS, omitiendo valores falsy. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
