const galleryItem = {
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string', validation: (Rule: { required: () => unknown }) => Rule.required() },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Loghi', value: 'Loghi' },
          { title: 'Illustrazioni', value: 'Illustrazioni' },
          { title: 'Locandine', value: 'Locandine' },
          { title: 'Character Design', value: 'Character' },
          { title: 'Grafica', value: 'Grafica' },
        ],
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: 'image', title: 'Immagine', type: 'image', options: { hotspot: true } },
    { name: 'year', title: 'Anno', type: 'number' },
    { name: 'description', title: 'Descrizione', type: 'text', rows: 3 },
    { name: 'featured', title: 'In evidenza', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Ordine', type: 'number' },
  ],
  orderings: [
    { title: 'Ordine manuale', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
}

export default galleryItem
