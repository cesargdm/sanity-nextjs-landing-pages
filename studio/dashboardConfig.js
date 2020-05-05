export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eb0b37f268b39e42d904086',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w6iug9f1',
                  apiId: '254bb313-d704-4211-af62-e2a9ab873af6'
                },
                {
                  buildHookId: '5eb0b3804e4ed18ac39275d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9zh2q9oq',
                  apiId: 'fa919318-0613-41ea-bf65-49f0900d94a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cesargdm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9zh2q9oq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
