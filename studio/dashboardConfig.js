export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6227bd1a164a8a00c0c9d070',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-85xf2y9m',
                  apiId: '62c20440-7044-4456-ac0b-b72bdd4a5c16'
                },
                {
                  buildHookId: '6227bd1b1d029a00be56647a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-du1nu1qf',
                  apiId: '8f53b303-6b2e-48af-96ec-e6713d904943'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sargsyan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-du1nu1qf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
