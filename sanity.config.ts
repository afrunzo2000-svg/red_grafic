import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import galleryItem from './lib/sanity/schemas/galleryItem'
import service from './lib/sanity/schemas/service'
import siteSettings from './lib/sanity/schemas/siteSettings'

export default defineConfig({
  name: 'red-grafic',
  title: 'Red_grafic Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenuti')
          .items([
            S.listItem()
              .title('🖼️  Galleria / Portfolio')
              .child(
                S.documentList()
                  .title('Lavori')
                  .filter('_type == "galleryItem"')
              ),
            S.divider(),
            S.listItem()
              .title('🎨  Servizi')
              .child(
                S.documentList()
                  .title('Servizi')
                  .filter('_type == "service"')
              ),
            S.divider(),
            S.listItem()
              .title('⚙️  Impostazioni Sito')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
  ],

  schema: {
    types: [galleryItem, service, siteSettings],
  },
})
