const service = {
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string', validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'number', title: 'Numero ordine', type: 'number' },
    { name: 'description', title: 'Descrizione', type: 'text', rows: 4 },
    { name: 'includes', title: 'Cosa include', type: 'array', of: [{ type: 'string' }] },
    { name: 'timeframe', title: 'Tempi di consegna', type: 'string' },
  ],
  orderings: [
    { title: 'Ordine numerico', name: 'numberAsc', by: [{ field: 'number', direction: 'asc' }] },
  ],
}

export default service
