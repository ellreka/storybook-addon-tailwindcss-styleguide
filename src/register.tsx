import React from 'react'
import { addons, types } from '@storybook/addons'
import { useParameter } from '@storybook/api'
//@ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig'

const ADDON_ID = 'tailwindcss-styleguide'

const MyPanel = () => <div>MyAdkkkkdon</div>

addons.register(ADDON_ID, (api) => {
  addons.add(`${ADDON_ID}/tab`, {
    type: types.TAB,
    title: 'TailwindCSS StyleGuide',
    route: ({ storyId, refId }) =>
      refId ? `/${ADDON_ID}/${refId}_${storyId}` : `/${ADDON_ID}/${storyId}`,
    match: ({ viewMode }) => viewMode === ADDON_ID,
    render: () => {
      const res = useParameter<{
        config: string
      }>(ADDON_ID)
      const conf = require('../tailwind.config.js')
      const fullConfig = resolveConfig(conf)
      React.useEffect(() => {
        console.log(conf)
      }, [])
      return (
        <div>
          <h2>I'm a tabbed addon in ee</h2>
          {JSON.stringify(res)}
          {JSON.stringify(fullConfig)}
        </div>
      )
    }
  })
})
