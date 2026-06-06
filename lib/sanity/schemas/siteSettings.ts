const siteSettings = {
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Telefono', type: 'string' },
    { name: 'whatsapp', title: 'Numero WhatsApp (con prefisso)', type: 'string' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
  ],
}

export default siteSettings
