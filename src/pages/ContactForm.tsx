import { useState, type FormEvent, type HTMLAttributes } from 'react'
import { quoteProjectTypes } from '@/data/quote'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { generateWhatsAppLink, quoteFormMessage } from '@/utils/whatsapp'

type FormState = 'idle' | 'error' | 'ready'

type FormValues = {
  name: string
  phone: string
  city: string
  projectType: string
  description: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  phone: '',
  city: '',
  projectType: '',
  description: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!values.phone.trim()) errors.phone = 'Ingresa tu WhatsApp o teléfono.'
  if (!values.city.trim()) errors.city = 'Ingresa tu ciudad.'
  if (!values.projectType) errors.projectType = 'Selecciona un tipo de proyecto.'
  if (!values.description.trim()) {
    errors.description = 'Cuéntanos brevemente tu proyecto.'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [state, setState] = useState<FormState>('idle')
  const [whatsappHref, setWhatsappHref] = useState<string | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setState('error')
      setWhatsappHref(null)
      return
    }

    const typeLabel =
      quoteProjectTypes.find((item) => item.id === values.projectType)?.label ??
      values.projectType

    const href = generateWhatsAppLink(
      quoteFormMessage({
        name: values.name.trim(),
        phone: values.phone.trim(),
        city: values.city.trim(),
        projectType: typeLabel,
        description: values.description.trim(),
      }),
    )

    setWhatsappHref(href)
    setState('ready')
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
        <Field
          id="name"
          label="Nombre"
          error={errors.name}
          value={values.name}
          onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
          autoComplete="name"
          required
        />
        <Field
          id="phone"
          label="WhatsApp / teléfono"
          error={errors.phone}
          value={values.phone}
          onChange={(value) => setValues((prev) => ({ ...prev, phone: value }))}
          autoComplete="tel"
          inputMode="tel"
          required
        />
        <Field
          id="city"
          label="Ciudad"
          error={errors.city}
          value={values.city}
          onChange={(value) => setValues((prev) => ({ ...prev, city: value }))}
          autoComplete="address-level2"
          required
        />

        <div>
          <label htmlFor="projectType" className="text-small font-medium text-ferresa-ink">
            Tipo de proyecto <span className="text-ferresa-muted">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            required
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            className={fieldClass(Boolean(errors.projectType))}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, projectType: event.target.value }))
            }
          >
            <option value="">Selecciona una opción</option>
            {quoteProjectTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="projectType-error" className="mt-1 text-small text-red-700" role="alert">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="description" className="text-small font-medium text-ferresa-ink">
            Descripción del proyecto <span className="text-ferresa-muted">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            value={values.description}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? 'description-error' : undefined}
            className={cn(fieldClass(Boolean(errors.description)), 'resize-y')}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          />
          {errors.description ? (
            <p id="description-error" className="mt-1 text-small text-red-700" role="alert">
              {errors.description}
            </p>
          ) : null}
        </div>

        <Button type="submit" variant="primary">
          Preparar mensaje para WhatsApp
        </Button>
      </form>

      <div id="form-status" aria-live="polite">
        {state === 'error' ? (
          <p className="text-small text-red-700" role="alert">
            Revisa los campos marcados e inténtalo de nuevo.
          </p>
        ) : null}
        {state === 'ready' && whatsappHref ? (
          <div className="border border-ferresa-line bg-ferresa-surface-muted p-5">
            <p className="text-body text-ferresa-ink">
              Tu mensaje está listo. Continúa en WhatsApp para enviarlo a Ferresa.
            </p>
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-4"
            >
              Abrir WhatsApp
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function fieldClass(hasError: boolean) {
  return cn(
    'mt-2 w-full rounded-[var(--radius-md)] border bg-ferresa-surface px-3 py-2.5 text-body text-ferresa-ink transition-ferresa',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferresa-focus',
    hasError ? 'border-red-600' : 'border-ferresa-line',
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  autoComplete?: string
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-small font-medium text-ferresa-ink">
        {label} {required ? <span className="text-ferresa-muted">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass(Boolean(error))}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-small text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
