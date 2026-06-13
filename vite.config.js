import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Vishal Portfolio',
        short_name: 'Portfolio',
        description: 'My Personal Portfolio',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'vishal.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'vishal.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})